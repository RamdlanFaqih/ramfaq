"use client";

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const YoutubeChannel = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    }

    return (
        <motion.section 
            className="min-h-screen py-20 px-6 md:px-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <motion.div 
                    className="mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-xl md:text-4xl font-bold bg-secondary inline-block px-2 md:px-4 py-2 neo-card"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            rotate: [0, -2, 2, 0],
                            transition: { duration: 0.3 }
                        }}
                    >
                        Youtube Channel
                    </motion.h2>
                </motion.div>

                {/* Description */}
                <motion.p 
                    className="text-sm md:text-xl mb-5 max-w-3xl leading-relaxed"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                >
                    I&apos;m kicking off my own YouTube channel — a chill space where I share live streams, VODs, and whatever I feel like recording.
                    Sometimes I game, sometimes I code, and sometimes I just vibe. Come hang out!
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link target='_blank' href={'https://www.youtube.com/@RamdlanFaqih'}>
                        <Button className='bg-background text-text-primary border border-[#FF0000] cursor-pointer mb-10 hover-lift font-bold text-lg px-8 py-4'>
                            🎥 My Channel
                        </Button>
                    </Link>
                </motion.div>

                {/* Responsive YouTube Embed */}
                <motion.div 
                    className="w-full aspect-video neo-card overflow-hidden"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                >
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/poeOhYrZh-8?si=Wwk2MAinzlFzyfOT"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="mt-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                                            <motion.div
                            className="inline-block px-6 py-3 bg-secondary border border-black dark:border-white rounded-lg animate-pulse-slow"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-lg font-bold">🎮 Subscribe for more content!</span>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default YoutubeChannel
