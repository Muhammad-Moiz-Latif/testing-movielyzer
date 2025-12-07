"use client"

import { motion , type Variants } from 'framer-motion';
import { Play } from 'lucide-react';

// Animation variants
const fadeInUp : Variants = {
    hidden: { 
        opacity: 0, 
        y: 30 
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

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const stepVariant : Variants = {
    hidden: { 
        opacity: 0, 
        x: -50
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

const videoVariant : Variants= {
    hidden: { 
        opacity: 0, 
        x: 50,
        scale: 0.9
    },
    visible: { 
        opacity: 1, 
        x: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const HowItWorks = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="min-h-screen bg-black text-white font-inter relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-20 left-20 w-96 h-96 bg-[#D4F92F]/8 rounded-full blur-3xl"
                ></motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute bottom-20 right-20 w-80 h-80 bg-[#D4F92F]/8 rounded-full blur-3xl"
                ></motion.div>
            </div>

            <div className="relative z-10 p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div 
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.div 
                            variants={fadeInUp}
                            className="inline-flex items-center px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-full mb-6"
                        >
                            <span className="text-[#D4F92F] text-sm font-medium">✨ Simple Process</span>
                        </motion.div>
                        
                        <motion.h1 
                            variants={fadeInUp}
                            className="text-5xl md:text-6xl font-medium text-white mb-6"
                        >
                            How It Works
                        </motion.h1>
                        
                        <motion.p 
                            variants={fadeInUp}
                            className="text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            Transform your videos into searchable content with our powerful AI-driven platform in just three simple steps
                        </motion.p>
                    </motion.div>

                    {/* Main Content Container */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-[#030303] rounded-3xl p-8 border-[1px] border-zinc-900 shadow-2xl"
                    >
                        {/* Content Area */}
                        <div className="flex flex-col gap-12 items-start">
                            <div className="grid grid-cols-2 space-x-2 justify-center items-center">
                                {/* Left Side - Step Details */}
                                <motion.div 
                                    variants={staggerContainer}
                                    className="grid grid-rows-3 space-y-6"
                                >
                                    <motion.div variants={stepVariant}>
                                        <div className="flex flex-col w-full justify-end gap-5 pr-20">
                                            <div className="flex w-full">
                                                <h1 className="flex-1 text-7xl text-[#D4F92F]">01</h1>
                                                <div className="flex flex-col flex-[3.5] justify-end mb-3 gap-2">
                                                    <h1 className="text-xl text-white">Upload your video</h1>
                                                    <div className="w-full h-[1px] bg-zinc-900"></div>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-500 text-justify">Simply drag and drop your video files or browse to select them. We support all major formats including MP4, AVI, MOV, and more.</div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={stepVariant}>
                                        <div className="flex flex-col w-full justify-end gap-5 pr-20">
                                            <div className="flex w-full">
                                                <h1 className="flex-1 text-7xl text-[#D4F92F]">02</h1>
                                                <div className="flex flex-col flex-[3.5] justify-end mb-3 gap-2">
                                                    <h1 className="text-xl text-white">AI Processing</h1>
                                                    <div className="w-full h-[1px] bg-zinc-900"></div>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-500 text-justify">Our advanced AI analyzes your video content, transcribes speech with high accuracy, and intelligently indexes visual elements.</div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={stepVariant}>
                                        <div className="flex flex-col w-full justify-end gap-5 pr-20">
                                            <div className="flex w-full">
                                                <h1 className="flex-1 text-7xl text-[#D4F92F]">03</h1>
                                                <div className="flex flex-col flex-[3.5] justify-end mb-3 gap-2">
                                                    <h1 className="text-xl text-white">Search & Discover</h1>
                                                    <div className="w-full h-[1px] bg-zinc-900"></div>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-500 text-justify">Search through your video library using natural language queries and get precise, timestamped results instantly.</div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Right Side - Video */}
                                <motion.div 
                                    variants={videoVariant}
                                    className="space-y-6 flex-1"
                                >
                                    <div className="bg-black border-[1px] border-zinc-900 rounded-2xl p-6 shadow-xl">
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-medium text-white mb-2">See It In Action</h3>
                                            <p className="text-zinc-400 text-sm">Watch how our platform transforms video content</p>
                                        </div>
                                        <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                                            <iframe
                                                src="https://www.loom.com/embed/929a0d7076684ee3a145514141e4af9c"
                                                frameBorder="0"
                                                allowFullScreen
                                                className="absolute inset-0 w-full h-full"
                                            ></iframe>
                                        </div>
                                        <div className="flex items-center justify-center mt-6 gap-4">
                                            <motion.button 
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-6 py-3 bg-[#D4F92F] text-black rounded-xl hover:bg-[#D4F92F]/90 transition-all duration-300 font-semibold"
                                            >
                                                <Play className="h-4 w-4" />
                                                Watch Demo
                                            </motion.button>
                                            <span className="text-[#D4F92F] text-sm">2:30 minutes</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default HowItWorks;