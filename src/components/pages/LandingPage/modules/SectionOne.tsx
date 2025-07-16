"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

const SectionOne = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Avatar */}
      <motion.div 
        className="mb-10"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ 
            scale: 1.05,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Avatar className="w-48 h-48 md:w-[300px] md:h-[300px] shadow-xl ring-2 ring-black dark:ring-white rounded-full neo-card animate-float">
            <AvatarImage src="/images/profile.jpeg" alt="Ramdlan Faqih" />
            <AvatarFallback className="text-2xl font-bold">RF</AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.div>

      {/* Name, Description, Contact */}
      <motion.div 
        className="max-w-2xl flex flex-col items-center gap-6"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-black text-slate-800 dark:text-primary leading-tight"
          whileHover={{ 
            scale: 1.02,
            textShadow: "2px 2px 0px rgba(0,0,0,0.3)"
          }}
        >
          Ramdlan Faqih
        </motion.h1>

        <motion.div 
          className='flex gap-4 items-center'
          variants={containerVariants}
        >
          {[
            { icon: Linkedin, href: 'https://www.linkedin.com/in/ramdlanfaqih/', label: 'LinkedIn' },
            { icon: Instagram, href: 'https://www.instagram.com/ramfaq_/', label: 'Instagram' },
            { icon: Github, href: 'https://github.com/RamdlanFaqih', label: 'GitHub' },
            { icon: Youtube, href: 'https://www.youtube.com/@RamdlanFaqih', label: 'YouTube' },
            { icon: Facebook, href: 'https://www.facebook.com/ramfaq02/', label: 'Facebook' }
          ].map((social) => (
            <motion.div
              key={social.label}
              variants={socialVariants}
              whileHover={{ 
                scale: 1.2,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={social.href} target='_blank'>
                                 <div className="p-3 bg-white dark:bg-gray-800 border border-black dark:border-white rounded-lg hover-lift">
                  <social.icon className='w-6 h-6' />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="text-sm md:text-xl text-text-primary max-w-3xl leading-relaxed"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          I am a frontend developer specializing in React and React Native, with experience in web and mobile application development. I graduated from Pijar Camp&apos;s Fullstack Web & Mobile Developer bootcamp by Telkom Indonesia. I have a broad interest in all things tech.
        </motion.p>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
                     <div className="mt-8 px-8 py-4 bg-secondary border border-black dark:border-white rounded-lg animate-pulse-slow">
           <Link href={"mailto:ramfaqih@gmail.com"}>
           <span className="text-lg font-semibold cursor-pointer">🚀 Contact Me</span>
           </Link> 
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default SectionOne
