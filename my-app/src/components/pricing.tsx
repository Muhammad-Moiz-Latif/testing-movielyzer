"use client"

import { motion , type Variants } from 'framer-motion';
import pricetag from '../assets/tag.png';
import { Check, Rocket } from 'lucide-react';

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

const staggerContainer :Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const cardVariant:Variants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.95
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

const featureVariant :Variants = {
    hidden: { 
        opacity: 0, 
        x: -20 
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const featureStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const Pricing = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-full min-h-screen bg-black px-8 font-inter text-white flex flex-col items-center"
        >
            {/* Header */}
            <motion.div 
                variants={fadeInUp}
                className='flex gap-2 justify-center items-center bg-zinc-950 border border-[#D4F92F] rounded-full px-6 py-1 mb-14'
            >
                <img src={pricetag || "/placeholder.svg"} className='size-6' />
                <h1>Pricing Plans</h1>
            </motion.div>

            <motion.h1 
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className='text-5xl font-medium text-white mb-6'
            >
                Simple, Transparent Pricing
            </motion.h1>

            <motion.p 
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className='text-zinc-400 text-sm mb-16'
            >
                Choose the perfect plan for your needs. Upgrade or downgrade at any time with no hidden fees.
            </motion.p>

            {/* Pricing Cards */}
            <motion.div 
                variants={staggerContainer}
                className='grid grid-cols-3 w-full gap-7'
            >
                {/* Basic Plan */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className='flex flex-col p-5 gap-1 bg-zinc-950 rounded-2xl border-[1px] border-[#D4F92F]'
                >
                    <h1 className='text-2xl font-medium'>Basic</h1>
                    <p className='text-sm text-zinc-400 mb-3'>Try our basic features for free</p>
                    <h1 className='text-2xl font-medium mb-3'>$0.00 <span className='text-sm font-normal'>/month</span></h1>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='rounded-4xl border-[1px] border-[#D4F92F] py-2 mb-3'
                    >
                        Try Now
                    </motion.button>

                    <motion.ul 
                        variants={featureStagger}
                        className='flex flex-col'
                    >
                        {[
                            "60 minutes of video upload",
                            "Limited token usage (1,000 tokens)",
                            "Basic video search",
                            "7-day access",
                            "Email support"
                        ].map((feature, index) => (
                            <motion.div 
                                key={index}
                                variants={featureVariant}
                                className="flex items-center mb-2"
                            >
                                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                                <li>{feature}</li>
                            </motion.div>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Plus Plan (Recommended) */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                    className='flex flex-col p-5 gap-1 bg-gradient-to-br from-zinc-950 via-lime-950 to-zinc-950 rounded-2xl border-[1px] border-[#D4F92F] relative'
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className='flex gap-2 justify-center items-center bg-[#D4F92F] rounded-full px-3 py-1 mb-14 absolute top-5 right-5'
                    >
                        <Rocket className='size-4 text-black' />
                        <h1 className='text-sm text-black'>Recommended</h1>
                    </motion.div>

                    <h1 className='text-2xl font-medium'>Plus</h1>
                    <p className='text-sm text-zinc-400 mb-3'>Full access to all premium features</p>
                    <h1 className='text-2xl font-medium mb-3'>$490.00 <span className='text-sm font-normal'>/month</span></h1>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='rounded-4xl bg-[#D4F92F] text-black py-2 mb-3'
                    >
                        Get Started Now
                    </motion.button>

                    <motion.ul 
                        variants={featureStagger}
                        className='flex flex-col'
                    >
                        {[
                            "60 minutes of video upload",
                            "Limited token usage (1,000 tokens)",
                            "Basic video search",
                            "7-day access",
                            "Email support",
                            "600 minutes of video upload"
                        ].map((feature, index) => (
                            <motion.div 
                                key={index}
                                variants={featureVariant}
                                className="flex items-center mb-2"
                            >
                                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                                <li>{feature}</li>
                            </motion.div>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Enterprise Plan */}
                <motion.div 
                    variants={cardVariant}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className='flex flex-col p-5 gap-1 bg-zinc-950 rounded-2xl border-[1px] border-[#D4F92F]'
                >
                    <h1 className='text-2xl font-medium'>Enterprise</h1>
                    <p className='text-sm text-zinc-400 mb-3'>Advanced features for large organizations</p>
                    <h1 className='text-2xl font-medium mb-3'>$1,290.00 <span className='text-sm font-normal'>/month</span></h1>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='rounded-4xl border-[1px] border-[#D4F92F] py-2 mb-3'
                    >
                        Get Started Now
                    </motion.button>

                    <motion.ul 
                        variants={featureStagger}
                        className='flex flex-col'
                    >
                        {[
                            "Unlimited video uploads",
                            "Unlimited tokens",
                            "AI-powered insights",
                            "24/7 dedicated support",
                            "Advanced security features",
                            "Custom AI models",
                            "White-label solution"
                        ].map((feature, index) => (
                            <motion.div 
                                key={index}
                                variants={featureVariant}
                                className="flex items-center mb-2"
                            >
                                <Check className='text-black bg-white rounded-full size-4 mr-2' />
                                <li>{feature}</li>
                            </motion.div>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};