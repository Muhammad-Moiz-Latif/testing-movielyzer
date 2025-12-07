"use client"

import { motion, type Variants } from 'framer-motion';

// Animation variants
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

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariant: Variants = {
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export const PrivacyPolicy = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="min-h-screen bg-black text-white font-inter relative overflow-hidden pb-20 pt-28 px-8"
        >
            {/* Background Elements */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#D4F92F]/8 rounded-full blur-3xl"
            ></motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4F92F]/8 rounded-full blur-3xl"
            ></motion.div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.div 
                        variants={fadeInUp}
                        className="inline-flex items-center px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-full mb-6"
                    >
                        <span className="text-[#D4F92F] text-sm font-medium">🔒 Privacy First</span>
                    </motion.div>
                    
                    <motion.h1 
                        variants={fadeInUp}
                        className="text-5xl md:text-6xl font-medium text-white mb-6"
                    >
                        Privacy Policy
                    </motion.h1>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className="text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Your privacy is critically important to us. This policy outlines how we collect, use, and protect your personal information.
                    </motion.p>
                </motion.div>

                {/* Policy Content */}
                <motion.div 
                    variants={staggerContainer}
                    className="bg-zinc-950 p-8 rounded-2xl border border-zinc-900 shadow-xl text-zinc-400 leading-relaxed"
                >
                    <motion.h2 variants={itemVariant} className="text-2xl font-medium text-white mb-4">1. Introduction</motion.h2>
                    <motion.p variants={itemVariant} className="mb-6">
                        This Privacy Policy describes how Movielyzer ("we," "us," or "our") collects, uses, and discloses information about you when you use our website and services (collectively, the "Services"). By using our Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy.
                    </motion.p>

                    <motion.h2 variants={itemVariant} className="text-2xl font-medium text-white mb-4">2. Information We Collect</motion.h2>
                    <motion.p variants={itemVariant} className="mb-2">
                        We collect information you provide directly to us, such as when you create an account, use our Services, or communicate with us. This may include:
                    </motion.p>
                    <motion.ul variants={staggerContainer} className="list-disc list-inside mb-6 pl-4">
                        <motion.li variants={itemVariant} className="mb-1">Personal identification information (Name, email address, phone number, etc.)</motion.li>
                        <motion.li variants={itemVariant} className="mb-1">Payment information (processed by third-party payment processors)</motion.li>
                        <motion.li variants={itemVariant} className="mb-1">Video content you upload and associated metadata</motion.li>
                        <motion.li variants={itemVariant} className="mb-1">Communications with us (customer support inquiries, feedback)</motion.li>
                    </motion.ul>
                    <motion.p variants={itemVariant} className="mb-6">
                        We also automatically collect certain information when you access or use our Services, including:
                    </motion.p>
                    <motion.ul variants={staggerContainer} className="list-disc list-inside mb-6 pl-4">
                        <motion.li variants={itemVariant} className="mb-1">Log data (IP address, browser type, access times, pages viewed)</motion.li>
                        <motion.li variants={itemVariant} className="mb-1">Device information (hardware model, operating system, unique device identifiers)</motion.li>
                        <motion.li variants={itemVariant} className="mb-1">Usage data (features used, time spent, search queries)</motion.li>
                    </motion.ul>

                    <motion.h2 variants={itemVariant} className="text-2xl font-medium text-white mb-4">3. How We Use Your Information</motion.h2>
                    <motion.p variants={itemVariant} className="mb-2">
                        We use the information we collect for various purposes, including to:
                    </motion.p>
                    <motion.ul variants={staggerContainer} className="list-disc list-inside mb-6 pl-4">
                        <motion.li variants={itemVariant} className="mb-1">Provide, maintain, and improve our Services</motion.li>
                        <motion.li variants={itemVariant} className="mb-1">Process transactions and send related information</motion.li>
                        <motion.li variants={itemVariant} className="mb-1">Communicate with you about products, services, and offers</motion.li>
                        <motion.li variants={itemVariant} className="mb-1">Monitor and analyze trends, usage, and activities in connection with our Services</motion.li>
                        <motion.li variants={itemVariant} className="mb-1">Detect, investigate, and prevent fraudulent transactions and other illegal activities</motion.li>
                    </motion.ul>

                    <motion.h2 variants={itemVariant} className="text-2xl font-medium text-white mb-4">4. Data Security</motion.h2>
                    <motion.p variants={itemVariant} className="mb-6">
                        We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                    </motion.p>

                    <motion.h2 variants={itemVariant} className="text-2xl font-medium text-white mb-4">5. Your Rights</motion.h2>
                    <motion.p variants={itemVariant} className="mb-6">
                        You have certain rights regarding your personal information, including the right to access, correct, or delete your data. Please contact us to exercise these rights.
                    </motion.p>

                    <motion.h2 variants={itemVariant} className="text-2xl font-medium text-white mb-4">6. Changes to This Policy</motion.h2>
                    <motion.p variants={itemVariant} className="mb-6">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </motion.p>

                    <motion.p variants={itemVariant} className="text-sm text-right mt-8">
                        Last updated: July 29, 2025
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;