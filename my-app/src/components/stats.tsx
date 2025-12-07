"use client";

import { motion, type Variants } from "framer-motion";

import CountUp from "./ui/CountUp";

;

// Animation variants
const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const statVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // Custom bezier for smooth easeOut
        },
    },
};

export const Stats = () => {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariant}
            className="grid grid-cols-3 gap-6 mt-12 bg-[#030303] font-inter p-6 border-[1px] border-zinc-900 rounded-4xl mx-8 mb-32 text-white"
        >
            <motion.div variants={statVariant} className="flex flex-col justify-center items-center gap-1">
                <motion.h1 className="text-6xl text-[#D4F92F]">
                    <CountUp
                        from={0}
                        to={99}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                    />
                    <span>%</span>
                </motion.h1>
                <p className="text-white tracking-wide text-lg">Accuracy</p>
            </motion.div>

            <motion.div variants={statVariant} className="flex flex-col justify-center items-center gap-1">
                <motion.h1 className="text-6xl text-[#D4F92F]">
                    <CountUp
                        from={0}
                        to={2}
                        separator=","
                        direction="up"
                        duration={2}
                        className="count-up-text"
                    />
                    <span>x</span>
                </motion.h1>
                <p className="text-white tracking-wide text-lg">Faster</p>
            </motion.div>

            <motion.div variants={statVariant} className="flex flex-col justify-center items-center gap-1">
                <motion.h1 className="text-6xl text-[#D4F92F]">
                    <CountUp
                        from={0}
                        to={100}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                    />
                    <span>+</span>
                </motion.h1>
                <p className="text-white tracking-wide text-lg">Companies</p>
            </motion.div>
        </motion.div>
    );
};
