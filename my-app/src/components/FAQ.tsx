"use client"

import { motion, type Variants } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"; // Assuming shadcn/ui accordion is available

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
            staggerChildren: 0.15,
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

const faqData = [
    {
        question: "What is Rimberio?",
        answer: "Rimberio is an AI-powered video search platform that allows you to search through video content using natural language queries, transcribe speech, and index visual elements for precise, timestamped results."
    },
    {
        question: "How accurate is the AI search?",
        answer: "Our AI search boasts an accuracy rate of 99%, ensuring you find exactly what you're looking for in seconds, not hours."
    },
    {
        question: "What video formats do you support?",
        answer: "We support all major video formats including MP4, AVI, MOV, WMV, and more. Simply drag and drop your files, and our system will process them automatically."
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we prioritize your data security with enterprise-grade encryption, secure servers, and a 99.9% uptime guarantee. Your content is always protected."
    },
    {
        question: "Can I integrate Rimberio with my existing systems?",
        answer: "For enterprise clients, we offer custom integration solutions and API access to seamlessly connect Rimberio with your existing workflows and platforms."
    },
    {
        question: "What is 'token usage' in your pricing plans?",
        answer: "Token usage refers to the amount of AI processing power consumed by your searches and analyses. Different plans offer varying token limits to suit your usage needs."
    }
];

export const FAQ = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="min-h-screen bg-black text-white font-inter relative overflow-hidden pt-28 pb-20 px-8"
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
                        <span className="text-[#D4F92F] text-sm font-medium">❓ Questions?</span>
                    </motion.div>
                    
                    <motion.h1 
                        variants={fadeInUp}
                        className="text-5xl md:text-6xl font-medium text-white mb-6"
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className="text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Find quick answers to the most common questions about Rimberio, our features, pricing, and more.
                    </motion.p>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div 
                    variants={staggerContainer}
                    className="bg-zinc-950 p-8 rounded-2xl border border-zinc-900 shadow-xl"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((faq, index) => (
                            <motion.div key={index} variants={itemVariant}>
                                <AccordionItem value={`item-${index}`} className="border-b border-zinc-800 last:border-b-0">
                                    <AccordionTrigger className="text-left text-lg font-medium text-white hover:no-underline data-[state=open]:text-[#D4F92F] transition-colors duration-200">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-zinc-400 pb-4 pt-2">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default FAQ;