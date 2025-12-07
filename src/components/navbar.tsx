"use client"

import { useEffect, useState } from 'react';
import logo from '../assets/Rimberio-removebg-preview.png';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import Lucide icons for hamburger menu

// Animation variants for mobile menu
const mobileMenuVariants: Variants = {
    hidden: { 
        x: "100%", 
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    },
    visible: { 
        x: "0%", 
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const mobileMenuItemVariants: Variants = {
    hidden: { 
        y: 20, 
        opacity: 0 
    },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNavbar(false); // scrolling down → hide navbar
            } else {
                setShowNavbar(true); // scrolling up → show navbar
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    // Close mobile menu when navigating
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const handleNavLinkClick = (path: string) => {
        navigate(path);
        setIsMobileMenuOpen(false); // Close menu on link click
    };

    // Function to determine if a link is active
    const isActiveLink = (path: string) => {
        // For exact matches, or if the path is '/' and we are at the root
        if (path === '/') {
            return location.pathname === '/';
        }
        // For other paths, check if the current path starts with the link path
        // This handles cases like /About/Team still highlighting /About
        return location.pathname.startsWith(path);
    };

    return (
        <div
            className={`w-full h-14 fixed text-white p-10 font-inter bg-black z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="h-full flex justify-between items-center relative">
                {/* Logo */}
                <motion.img
                    whileHover={{ scale: 1.05, cursor: 'pointer' }}
                    whileTap={{ scale: 0.95 }}
                    src={logo || "/placeholder.svg"}
                    className="size-56 absolute -top-[85px] -left-6"
                    alt="Logo"
                    onClick={() => navigate('/')}
                />

                {/* Spacer for logo */}
                <div className="mr-32 hidden md:block"></div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex justify-center items-center gap-14 border border-zinc-800 py-2 rounded-full px-7">
                    <motion.h1
                        whileHover={{ scale: 1.05, color: "#D4F92F", cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavLinkClick('/')}
                        className={isActiveLink('/') ? "text-[#D4F92F]" : 'text-white'}
                    >Home</motion.h1>
                    <motion.h1
                        whileHover={{ scale: 1.05, color: "#D4F92F", cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavLinkClick('/About')}
                        className={isActiveLink('/About') ? "text-[#D4F92F]" : 'text-white'}
                    >About Us</motion.h1>
                    <motion.h1
                        whileHover={{ scale: 1.05, color: "#D4F92F", cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavLinkClick('/Contact')}
                        className={isActiveLink('/Contact') ? "text-[#D4F92F]" : 'text-white'}
                    >Contact Us</motion.h1>
                    <motion.h1
                        whileHover={{ scale: 1.05, color: "#D4F92F", cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavLinkClick('/Policy')}
                        className={isActiveLink('/Policy') ? "text-[#D4F92F]" : 'text-white'}
                    >Privacy Policy</motion.h1>
                    <motion.h1
                        whileHover={{ scale: 1.05, color: "#D4F92F", cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavLinkClick('/FAQ')}
                        className={isActiveLink('/FAQ') ? "text-[#D4F92F]" : 'text-white'}
                    >FAQ</motion.h1>
                </div>

                {/* Desktop Sign In Button */}
                <motion.div
                    whileHover={{ scale: 1.05, cursor: 'pointer' }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block border border-white px-7 py-2 rounded-full text-white"
                    onClick={() => navigate('/SignIn')}
                >
                    Sign In
                </motion.div>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                        className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 md:hidden z-40"
                    >
                        <motion.h1
                            variants={mobileMenuItemVariants}
                            onClick={() => handleNavLinkClick('/')}
                            className={`text-3xl font-bold ${isActiveLink('/') ? "text-[#D4F92F]" : 'text-white'}`}
                        >Home</motion.h1>
                        <motion.h1
                            variants={mobileMenuItemVariants}
                            onClick={() => handleNavLinkClick('/About')}
                            className={`text-3xl font-bold ${isActiveLink('/About') ? "text-[#D4F92F]" : 'text-white'}`}
                        >About Us</motion.h1>
                        <motion.h1
                            variants={mobileMenuItemVariants}
                            onClick={() => handleNavLinkClick('/Contact')}
                            className={`text-3xl font-bold ${isActiveLink('/Contact') ? "text-[#D4F92F]" : 'text-white'}`}
                        >Contact Us</motion.h1>
                        <motion.h1
                            variants={mobileMenuItemVariants}
                            onClick={() => handleNavLinkClick('/Policy')}
                            className={`text-3xl font-bold ${isActiveLink('/Policy') ? "text-[#D4F92F]" : 'text-white'}`}
                        >Privacy Policy</motion.h1>
                        <motion.h1
                            variants={mobileMenuItemVariants}
                            onClick={() => handleNavLinkClick('/FAQ')}
                            className={`text-3xl font-bold ${isActiveLink('/FAQ') ? "text-[#D4F92F]" : 'text-white'}`}
                        >FAQ</motion.h1>
                        <motion.div
                            variants={mobileMenuItemVariants}
                            className="border border-white px-7 py-3 rounded-full text-white text-xl font-semibold"
                            onClick={() => handleNavLinkClick('/SignIn')}
                        >
                            Sign In
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};