const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// fake DB for now:
let movies = [
    { id: 1, title: "Inception" },
    { id: 2, title: "Interstellar" }
];

// Get all movies
app.get("/api/movies", (req, res) => {
    res.json(movies);
});

// Add movie
app.post("/api/movies", (req, res) => {
    const movie = {
        id: Date.now(),
        title: req.body.title
    };
    movies.push(movie);
    res.json(movie);
});

// Delete movie
app.delete("/api/movies/:id", (req, res) => {
    movies = movies.filter(m => m.id != req.params.id);
    res.sendStatus(204);
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
