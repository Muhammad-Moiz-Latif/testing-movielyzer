"use client";

import logo from '../assets/Rimberio-removebg-preview.png';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-96 bg-zinc-950 pt-32 md:pt-52 px-4 sm:px-8 md:px-8 font-inter text-white flex flex-col gap-10">
            {/* Main content grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">

                {/* Logo and description */}
                <div className="flex flex-col relative w-full h-full items-center md:items-start text-center md:text-left">
                    <img
                        src={logo || "/placeholder.svg"}
                        className="size-32 md:size-38 absolute -top-16 md:-top-11 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0"
                        alt="Company Logo"
                    />
                    <p className="mt-20 md:mt-8 text-sm text-zinc-400 max-w-xs md:max-w-none">
                        Revolutionizing how you search and interact with video content through advanced AI technology.
                    </p>
                </div>

                {/* Links section */}
                <div className="flex flex-col sm:flex-row justify-around md:justify-start gap-8 sm:gap-10 md:gap-10">
                    {/* Quick Links */}
                    <div className="flex flex-col items-center sm:items-start pl-0 md:pl-24">
                        <h1 className="font-medium mb-3 text-[#D4F92F] text-lg">
                            Quick Links
                        </h1>
                        <ul className="flex flex-col gap-2 text-center sm:text-left">
                            {['About Us', 'Contact Us', 'FAQ', 'Privacy Policy', 'Features'].map((link, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-zinc-400 cursor-pointer hover:text-[#D4F92F] transition-colors duration-300"
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h1 className="font-medium mb-3 text-[#D4F92F] text-lg">
                            Social Links
                        </h1>
                        <ul className="flex flex-col gap-2 text-center sm:text-left">
                            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((social, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-zinc-400 cursor-pointer hover:text-[#D4F92F] transition-colors duration-300"
                                >
                                    {social}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Box */}
                <div className="flex flex-col rounded-xl p-6 gap-2 items-center justify-center border-[1px] border-zinc-900 text-center hover:border-[#D4F92F] transition-all duration-300">
                    <h1 className="text-xl cursor-pointer" onClick={() => navigate('/About')}>
                        Contact Us
                    </h1>
                    <p className="text-zinc-400 text-sm mb-3">
                        Have questions? Reach out to our support team.
                    </p>
                    <button className="bg-[#D4F92F] w-full sm:w-1/2 py-2 text-black rounded-xl text-base hover:bg-[#c4e82f] transition-all duration-300">
                        Contact Support
                    </button>
                </div>
            </div>

            {/* Bottom section */}
            <div className="w-full flex flex-col gap-5">
                <div className="w-full h-[1px] bg-zinc-800"></div>
                <div className="text-center text-zinc-400 mb-5 text-xs md:text-sm">
                    © Copyright 2025, All Rights Reserved by Moiz Latif
                </div>
            </div>
        </div>
    );
};
