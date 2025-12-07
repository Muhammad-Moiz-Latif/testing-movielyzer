"use client"

import { motion, type Variants } from 'framer-motion';
import { Users, Lightbulb, Handshake, Rocket } from 'lucide-react'; // Using Lucide icons for consistency
import MagicBento from './ui/MagicBento';
import hexagons from '../assets/Hexagon.svg'; // Not used in this component, but kept if it's used elsewhere

// Animation variants (kept same as before)
const fadeInUp: Variants = {
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

const mapVariant: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: -50 // Start slightly above
    },
    visible: {
        opacity: 0.1, // Make it subtle as a background element
        scale: 1,
        y: 0,
        transition: {
            duration: 1.5, // Slower animation for background
            ease: "easeOut",
            delay: 0.5 // Delay after page load
        }
    }
};

const cardVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariant: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 20
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export const About = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="min-h-screen bg-black text-white font-inter relative overflow-hidden py-20 md:py-28 px-4 sm:px-8"
        >
            {/* Background Elements - Map */}
            <motion.div
                variants={mapVariant}
                className='absolute top-20 md:top-36 w-full h-auto' // Adjusted top for responsiveness
                style={{
                    WebkitMaskImage:
                        'radial-gradient(circle at top left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%),' +
                        'radial-gradient(circle at top right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%),' +
                        'radial-gradient(circle at bottom left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%),' +
                        'radial-gradient(circle at bottom right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%)',
                    WebkitMaskComposite: 'destination-in',
                    maskComposite: 'intersect',
                }}
            >
                <img src={hexagons || "/placeholder.svg"} className='w-full h-full object-cover' alt="World Map Background" />
            </motion.div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header Section */}
                <motion.div
                    variants={staggerContainer}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-zinc-950 border border-zinc-800 rounded-full mb-4 md:mb-6 text-sm md:text-base"
                    >
                        <span className="text-[#D4F92F] font-medium">💡 Our Story</span>
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-medium text-white mb-4 md:mb-6 leading-tight"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-zinc-400 max-w-full md:max-w-3xl mx-auto leading-relaxed text-sm md:text-base px-4"
                    >
                        At Movielyzer, we're passionate about transforming how you interact with video content. Our journey began with a simple idea: <span className='italic text-[#D4F92F] font-extralight'>to make video search as intuitive and powerful as human understanding.</span>
                    </motion.p>
                </motion.div>

                {/* Mission/Vision Section */}
                <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20"
                >
                    <motion.div variants={cardVariant}>
                        <MagicBento className="custom-spotlight-card hover:cursor-pointer p-6 md:p-8" spotlightColor="rgba(212, 249, 47, 0.2)">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#D4F92F] mb-3 md:mb-4">Our Mission</h2>
                            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                To empower individuals and businesses with cutting-edge AI technology that unlocks the full potential of video content, making information accessible, searchable, and actionable. We strive to eliminate the friction of traditional video search, saving valuable time and fostering deeper insights.
                            </p>
                        </MagicBento>
                    </motion.div>
                    <motion.div variants={cardVariant}>
                        <MagicBento className="custom-spotlight-card hover:cursor-pointer p-6 md:p-8" spotlightColor="rgba(212, 249, 47, 0.2)">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#D4F92F] mb-3 md:mb-4">Our Vision</h2>
                            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                We envision a world where every piece of video content is instantly searchable and understandable, transcending language barriers and visual complexities. We aim to be the leading platform for intelligent video search, continuously innovating to meet the evolving needs of our users.
                            </p>
                        </MagicBento>
                    </motion.div>
                </motion.div>

                {/* Core Values Section */}
                <motion.div
                    variants={staggerContainer}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl font-medium text-white mb-8 md:mb-10"
                    >
                        Our Core Values
                    </motion.h2>
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    >
                        <motion.div variants={itemVariant} className="flex flex-col items-center text-center p-4 md:p-6 bg-zinc-950 rounded-xl border border-zinc-900">
                            <Lightbulb className="h-10 w-10 md:h-12 md:w-12 text-[#D4F92F] mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2">Innovation</h3>
                            <p className="text-xs md:text-sm text-zinc-400">Continuously pushing boundaries with AI.</p>
                        </motion.div>
                        <motion.div variants={itemVariant} className="flex flex-col items-center text-center p-4 md:p-6 bg-zinc-950 rounded-xl border border-zinc-900">
                            <Users className="h-10 w-10 md:h-12 md:w-12 text-[#D4F92F] mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2">User-Centric</h3>
                            <p className="text-xs md:text-sm text-zinc-400">Building solutions that truly serve our users.</p>
                        </motion.div>
                        <motion.div variants={itemVariant} className="flex flex-col items-center text-center p-4 md:p-6 bg-zinc-950 rounded-xl border border-zinc-900">
                            <Handshake className="h-10 w-10 md:h-12 md:w-12 text-[#D4F92F] mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2">Integrity</h3>
                            <p className="text-xs md:text-sm text-zinc-400">Operating with transparency and trust.</p>
                        </motion.div>
                        <motion.div variants={itemVariant} className="flex flex-col items-center text-center p-4 md:p-6 bg-zinc-950 rounded-xl border border-zinc-900">
                            <Rocket className="h-10 w-10 md:h-12 md:w-12 text-[#D4F92F] mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2">Excellence</h3>
                            <p className="text-xs md:text-sm text-zinc-400">Delivering high-quality, reliable products.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    variants={fadeInUp}
                    className="text-center mt-16 md:mt-20"
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 md:mb-6 leading-tight">Ready to Experience Intelligent Video Search?</h2>
                    <p className="text-zinc-400 max-w-full md:max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-4">
                        Join the growing number of companies transforming their video workflows with Rimberio.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#c4e82f" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#D4F92F] text-black rounded-full px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-semibold transition-all duration-300"
                    >
                        Get Started Today
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;