"use client"

import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import map from '../assets/World Map.svg';

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

export const ContactUs = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="min-h-screen bg-black text-white font-inter relative overflow-hidden pt-28 pb-20 px-8"
        >
            {/* Background Elements - Map */}
            <motion.div
                variants={mapVariant}
                className='absolute top-36 w-full h-auto' // Added w-full h-auto for better sizing
                style={{
                    WebkitMaskImage:
                        'radial-gradient(circle at top left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%),' +
                        'radial-gradient(circle at top right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%),' +
                        'radial-gradient(circle at bottom left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%),' +
                        'radial-gradient(circle at bottom right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%)',
                    WebkitMaskComposite: 'destination-in',
                    maskComposite: 'intersect',
                }}
            >
                <img src={map || "/placeholder.svg"} className='w-full h-full object-cover' alt="World Map Background" />
            </motion.div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header Section */}
                <motion.div
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-full mb-6"
                    >
                        <span className="text-[#D4F92F] text-sm font-medium">✉️ Contact Us</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-6xl font-medium text-white mb-3"
                    >
                        Get in touch with our team
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        We have the team and know-how to help you scale 10x faster.
                    </motion.p>
                </motion.div>

                {/* Contact Form and Info */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        variants={staggerContainer}
                        className="bg-zinc-950 p-8 rounded-2xl border border-zinc-900 shadow-xl"
                    >
                        <motion.h2 variants={itemVariant} className="text-3xl font-medium text-white mb-6">Send us a Message</motion.h2>
                        <form className="flex flex-col gap-5">
                            <motion.input
                                variants={itemVariant}
                                whileFocus={{ scale: 1.01, borderColor: "#D4F92F" }}
                                type="text"
                                placeholder="Your Name"
                                className="w-full h-12 rounded-md pl-4 border-[1px] border-[#D4F92F] placeholder:text-white bg-transparent focus:outline-1 focus:outline-[#D4F92F] transition-all duration-200"
                            />
                            <motion.input
                                variants={itemVariant}
                                whileFocus={{ scale: 1.01, borderColor: "#D4F92F" }}
                                type="email"
                                placeholder="Your Email"
                                className="w-full h-12 rounded-md pl-4 border-[1px] border-[#D4F92F] placeholder:text-white bg-transparent focus:outline-1 focus:outline-[#D4F92F] transition-all duration-200"
                            />
                            <motion.textarea
                                variants={itemVariant}
                                whileFocus={{ scale: 1.01, borderColor: "#D4F92F" }}
                                placeholder="Your Message"
                                rows={6}
                                className="w-full rounded-md p-4 border-[1px] border-[#D4F92F] placeholder:text-white bg-transparent focus:outline-1 focus:outline-[#D4F92F] transition-all duration-200 resize-y"
                            ></motion.textarea>
                            <motion.button
                                variants={itemVariant}
                                whileHover={{ scale: 1.02, backgroundColor: "#c4e82f", cursor:"pointer" }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#D4F92F] text-black rounded-md px-6 py-3 text-lg font-semibold transition-all duration-300"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        variants={staggerContainer} // Apply stagger to this container
                        className="bg-transparent p-8 rounded-2xl border border-zinc-900 shadow-xl flex flex-col justify-center"
                    >
                        <motion.h2 variants={itemVariant} className="text-3xl font-medium text-white mb-6">Contact Information</motion.h2>
                        <motion.div variants={itemVariant} className="flex gap-4 mb-6">
                            <Mail className="h-8 w-8 text-[#D4F92F]" />
                            <div>
                                <h3 className="text-xl text-white">Email Us</h3>
                                <p className='text-zinc-400'>Our friendly team is here to help</p>
                                <p className="text-sm">support@rimberio.com</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariant} className="flex gap-4 mb-6">
                            <Phone className="h-8 w-8 text-[#D4F92F]" />
                            <div>
                                <h3 className="text-xl text-white">Call Us</h3>
                                <p className='text-zinc-400'>Mon-Fri from 8am to 9pm</p>
                                <p className="text-sm">+1 (123) 456-7890</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariant} className="flex mb-6 gap-4">
                            <MapPin className="h-8 w-8 text-[#D4F92F]" />
                            <div>
                                <h3 className="text-xl text-white">Visit Us</h3>
                                <p className='text-zinc-400'>Come say hello at our office HQ.</p>
                                <p className="text-sm">123 AI Tech Lane, Innovation City, CA 90210</p>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariant} className='w-full h-[0.5px] bg-[#D4F92F] mb-6'></motion.div>
                        <motion.div variants={itemVariant} className="flex flex-col items-center justify-center w-full gap-2">
                            <h3 className="text-xl text-white">Social Media</h3>
                            <div className='flex justify-center gap-5 w-full'>
                                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.95 }}><Instagram className="h-8 w-8 text-[#D4F92F]" /></motion.button>
                                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.95 }}><Facebook className="h-8 w-8 text-[#D4F92F]" /></motion.button>
                                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.95 }}><Twitter className="h-8 w-8 text-[#D4F92F]" /></motion.button>
                                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.95 }}><Linkedin className="h-8 w-8 text-[#D4F92F]" /></motion.button>
                                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.95 }}><Youtube className="h-8 w-8 text-[#D4F92F]" /></motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactUs;