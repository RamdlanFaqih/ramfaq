"use client";

import React from 'react'
import { motion } from 'framer-motion'
import SectionOne from './modules/SectionOne'
import SectionTwo from './modules/SectionTwo'
import Timeline from './modules/Timeline'
import YoutubeChannel from './modules/YoutubeChannel'
import ToggleTheme from '@/components/toggleTheme'

const LandingPage = () => {
    return (
        <>
        <div className=''>
            <motion.section 
                id='navbar' 
                className='flex items-center justify-between py-5 px-6 sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-black dark:border-white'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h1 
                    className='text-primary font-bold text-xl'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Ramdlan Faqih
                </motion.h1>
                <ToggleTheme />
            </motion.section>
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <SectionOne />
                <Timeline />
                <SectionTwo />
                <YoutubeChannel />
            </motion.div>
        </div>
        </>
    )
}

export default LandingPage