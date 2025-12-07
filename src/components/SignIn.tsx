"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import bg from '../assets/Hexagon.svg';
import visible from '../assets/visible.png';
import hide from '../assets/hide.png';
import google from '../assets/google.png';
import logo from '../assets/Rimberio-removebg-preview.png';
import { useNavigate } from 'react-router-dom';

// Animation variants
const pageVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const formContainerVariant: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: "-40%",
        x: "-50%"
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: "-50%",
        x: "-50%",
        transition: {
            duration: 0.7,
            ease: "easeOut",
            delay: 0.3
        }
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: "-60%",
        transition: {
            duration: 0.5,
            ease: "easeIn"
        }
    }
};

const logoVariant: Variants = {
    hidden: {
        opacity: 0,
        y: -50,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        y: -10,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.6
        }
    }
};

const contentStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.8 // Delay for content after form container appears
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            when: "afterChildren",
            duration: 0.3
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
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
};

const hrVariant: Variants = {
    hidden: {
        scaleX: 0
    },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    exit: {
        scaleX: 0,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
};

export default function SignIn() {
    const [isHidden1, setIsHidden1] = useState(true);
    const navigate = useNavigate();

    const handleNavLinkClick = (path: string) => {
        navigate(path);
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={pageVariant}
            className="max-w-full min-h-screen relative font-inter text-white overflow-hidden"
        >
            <img src={bg || "/placeholder.svg"} className='w-full h-full object-cover absolute inset-0' alt="background" style={{
                WebkitMaskImage:
                    'radial-gradient(circle at top left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%),' +
                    'radial-gradient(circle at top right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%),' +
                    'radial-gradient(circle at bottom left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%),' +
                    'radial-gradient(circle at bottom right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)',
                WebkitMaskComposite: 'destination-in',
                maskComposite: 'intersect',
            }} />

            <AnimatePresence mode="wait">
                <motion.form
                    key="authForm" // Key for AnimatePresence
                    variants={formContainerVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className='w-1/2 h-[92%] bg-black/60 absolute top-1/2 left-1/2 backdrop-blur-[3px] rounded-xl border-[1px] border-[#D4F92F] flex flex-col items-center pt-14 px-14'
                >
                    <motion.img
                        variants={logoVariant}
                        src={logo || "/placeholder.svg"}
                        className='size-48 absolute -top-7 hover:cursor-pointer left-[220px] overflow-hidden'
                        onClick={() => navigate('/')}
                        alt="logo"
                    />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key="signupForm" // Unique key for sign-up form
                            variants={contentStagger}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={`flex flex-col w-full`}
                        >
                            <motion.h1 variants={itemVariant} className='text-[40px] text-center'>Create an account</motion.h1>
                            <motion.form
                                variants={contentStagger}
                                className='flex flex-col gap-3 mt-5'
                            >
                                <motion.input
                                    variants={itemVariant}
                                    whileFocus={{ scale: 1.01, borderColor: "#D4F92F" }}
                                    className='w-full h-11 rounded-md pl-4 border-[1px] border-[#D4F92F] placeholder:text-white bg-transparent focus:outline-1 focus:outline-[#D4F92F] transition-all duration-200'
                                    placeholder='Username'
                                    name='username'
                                />
                                <motion.input
                                    variants={itemVariant}
                                    whileFocus={{ scale: 1.01, borderColor: "#D4F92F" }}
                                    className='w-full h-11 rounded-md pl-4 border-[1px] border-[#D4F92F] placeholder:text-white bg-transparent focus:outline-1 focus:outline-[#D4F92F] transition-all duration-200'
                                    placeholder='Email'
                                    type='email'
                                    name='email'
                                />
                                <motion.div variants={itemVariant} className='relative'>
                                    <input
                                        className='w-full h-11 rounded-md pl-4 border-[1px] border-[#D4F92F] placeholder:text-white bg-transparent focus:outline-1 focus:outline-[#D4F92F] transition-all duration-200'
                                        placeholder='Password'
                                        type={isHidden1 ? 'password' : 'text'}
                                        name='password'
                                    />
                                    <button className='hover:cursor-pointer' type='button' onClick={() => setIsHidden1(!isHidden1)}>
                                        <img src={isHidden1 ? hide || "/placeholder.svg" : visible || "/placeholder.svg"} className='w-6 absolute right-4 top-[10px]' alt="toggle visibility" />
                                    </button>
                                </motion.div>
                                <motion.div variants={itemVariant} className='mt-1 flex items-center gap-3 mb-5'>
                                    <input type='checkbox' className='w-5 h-5' name='checkbox' />
                                    <label className='text-sm'>I agree to the <span className='underline text-[#D4F92F] hover:cursor-pointer'>Terms & Conditions</span></label>
                                </motion.div>
                                <motion.button
                                    variants={itemVariant}
                                    whileHover={{ scale: 1.02, backgroundColor: "#c4e82f" }}
                                    whileTap={{ scale: 0.98 }}
                                    className='w-full h-11 rounded-md text-black bg-[#D4F92F] mb-3 cursor-pointer transition-all duration-200'
                                >
                                    Create account
                                </motion.button>
                            </motion.form>
                            <motion.div variants={itemVariant} className='flex justify-evenly items-center mb-3'>
                                <motion.hr variants={hrVariant} className="flex-grow border-[#D4F92F]" />
                                <h1 className='text-xs text-[#D4F92F] mx-4'>Or register with</h1>
                                <motion.hr variants={hrVariant} className="flex-grow border-[#D4F92F]" />
                            </motion.div>
                            <motion.button
                                variants={itemVariant}
                                whileHover={{ scale: 1.02, borderColor: "#c4e82f" }}
                                whileTap={{ scale: 0.98 }}
                                className='w-full h-11 rounded-md text-white border-[#D4F92F] border-[1px] hover:cursor-pointer transition-all duration-200'
                            >
                                <div className='flex items-center justify-center gap-2 w-full h-full'>
                                    <img src={google || "/placeholder.svg"} className='w-5 h-5' alt="Google logo" />
                                    <span className='text-base text-white'>Continue with Google</span>
                                </div>
                            </motion.button>
                            <motion.h1 variants={itemVariant} className='text-sm text-center mt-4'>Already have an account? <button onClick={() => handleNavLinkClick('/LogIn')} className='text-[#D4F92F] hover:cursor-pointer'>Log in</button></motion.h1>
                        </motion.div>

                    </AnimatePresence>
                </motion.form>
            </AnimatePresence>
        </motion.div>
    );
}