"use client"

import { motion , type Variants} from 'framer-motion';
import Search from '../assets/ai.png';
import Clock from '../assets/clock.png';
import Upload from '../assets/cloud-computing.png';
import Shield from '../assets/safe.png';
import arrow from '../assets/arrows.png';
import MagicBento from './ui/MagicBento';

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
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const cardVariant : Variants = {
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

const Features = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-screen bg-black text-white font-inter flex flex-col items-center px-13"
        >
            {/* Header with arrows */}
            <motion.div 
                variants={fadeInUp}
                className="rounded-full px-6 py-1 flex justify-center items-center gap-5"
            >
                <img src={arrow || "/placeholder.svg"} className='size-10 w-20' />
                <span className="text-gray-400">FEATURES</span>
                <img src={arrow || "/placeholder.svg"} className='size-10 w-20 rotate-180' />
            </motion.div>

            {/* Main title */}
            <motion.h1 
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-center text-5xl mt-20"
            >
                Why Our AI Search Stands Out
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="text-center text-gray-400 mt-3"
            >
                Unlock smarter video search. Save time. Get results.
            </motion.p>

            {/* Feature cards grid */}
            <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-4 gap-3 mt-10"
            >
                <motion.div variants={cardVariant}>
                    <MagicBento className="custom-spotlight-card hover:cursor-pointer" spotlightColor="rgba(212, 249, 47, 0.2)">
                        <div className="flex flex-1 flex-col gap-2 rounded-md text-justify">
                            <img src={Search || "/placeholder.svg"} className="text-[#D4F92F] mb-4 w-8 h-8" />
                            <h1 className="text-xl">Intelligent Search</h1>
                            <p className="text-sm text-gray-400 text-start">Our AI understands context and content, making your video searches more accurate than ever before.</p>
                        </div>
                    </MagicBento>
                </motion.div>

                <motion.div variants={cardVariant}>
                    <MagicBento className="custom-spotlight-card hover:cursor-pointer" spotlightColor="rgba(212, 249, 47, 0.2)">
                        <div className="flex flex-1 flex-col gap-2 rounded-md text-justify">
                            <img src={Clock || "/placeholder.svg"} className="text-[#D4F92F] mb-4 w-8 h-8" />
                            <h1 className="text-xl">Time Saving</h1>
                            <p className="text-sm text-gray-400 text-start">Find exactly what you are looking for in seconds, not hours. Jump directly to relevant moments.</p>
                        </div>
                    </MagicBento>
                </motion.div>

                <motion.div variants={cardVariant}>
                    <MagicBento className="custom-spotlight-card hover:cursor-pointer" spotlightColor="rgba(212, 249, 47, 0.2)">
                        <div className="flex flex-1 flex-col gap-2 rounded-md text-justify">
                            <img src={Upload || "/placeholder.svg"} className="text-[#D4F92F] mb-4 w-8 h-8" />
                            <h1 className="text-xl">Easy Upload</h1>
                            <p className="text-sm text-gray-400 text-start">Simply upload your videos and our system automatically processes them for intelligent searching.</p>
                        </div>
                    </MagicBento>
                </motion.div>

                <motion.div variants={cardVariant}>
                    <MagicBento className="custom-spotlight-card hover:cursor-pointer" spotlightColor="rgba(212, 249, 47, 0.2)">
                        <div className="flex flex-1 flex-col gap-2 rounded-md text-justify pb-5">
                            <img src={Shield || "/placeholder.svg"} className="text-[#D4F92F] mb-4 w-8 h-8" />
                            <h1 className="text-xl">Secure & Reliable</h1>
                            <p className="text-sm text-gray-400 text-start">Enterprise-grade security with 99.9% uptime guarantee and end-to-end encryption.</p>
                        </div>
                    </MagicBento>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Features;