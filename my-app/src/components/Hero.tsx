"use client"

import { motion, type Variants } from 'framer-motion';
import star from '../assets/star.png';
import bg from '../assets/hero-bg.svg';

// Animation variants with proper typing
const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const fadeIn: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export const Hero = () => {
    return (
        <div className="relative w-full min-h-screen md:h-screen font-inter text-white flex flex-col items-center gap-3 pt-20 md:pt-20 overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background Image with Animation */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
            >
                <img
                    src={bg || "/placeholder.svg"}
                    alt="background"
                    className="absolute top-0 left-0 w-full h-full object-cover rotate-180"
                />
            </motion.div>

            {/* Badge */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 1 }}
                className="border-[1px] z-10 rounded-full px-4 py-1 md:px-6 md:py-1 border-[#D4F92F] mt-10 md:mt-20 flex justify-center items-center gap-2 bg-zinc-950 bg-opacity-80 text-sm md:text-base"
            >
                <img src={star || "/placeholder.svg"} className="size-3" alt="star" />
                <span>POWERED BY AI</span>
                <img src={star || "/placeholder.svg"} className="size-3" alt="star" />
            </motion.div>

            {/* Title */}
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 1.2 }}
                className="z-10 text-4xl/[1.2] md:text-6xl/[1.2] tracking-wider text-center mt-5 max-w-3xl"
            >
                Video Search Made <br />
                <span className="text-[#D4F92F]">Intelligent</span>
            </motion.h1>

            {/* Description */}
            <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 1.4 }}
                className="z-10 text-center text-gray-300 text-sm md:text-base max-w-xl px-4"
            >
                Search through video content with AI-powered precision. <br />
                Find exactly what you need, when you need it.
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 1.6 }}
                className="z-10 flex flex-col sm:flex-row gap-3 mt-5"
            >
                <motion.button whileHover={{ scale: 1.05, backgroundColor: "#c4e82f", cursor: 'pointer' }}
                    whileTap={{ scale: 0.95 }} className="bg-[#D4F92F] text-black rounded-full px-6 py-3 text-base md:px-8 md:py-3">
                    Watch Video
                </motion.button>
                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                    whileTap={{ scale: 0.95 }} className="border-[1px] rounded-full border-white px-6 py-3 text-base md:px-8 md:py-3">
                    Get Started
                </motion.button>
            </motion.div>
        </div>
    );
};