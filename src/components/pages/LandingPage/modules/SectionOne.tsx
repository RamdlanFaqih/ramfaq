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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-32 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Avatar */}
      <motion.div 
        className="mb-8"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Avatar className="w-32 h-32 md:w-40 md:h-40 shadow-md border border-border rounded-full">
            <AvatarImage src="/images/profile.jpeg" alt="Ramdlan Faqih" />
            <AvatarFallback className="text-xl font-semibold text-foreground">RF</AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.div>

      {/* Name, Description, Contact */}
      <motion.div 
        className="max-w-2xl flex flex-col items-center gap-6"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-3xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight"
          whileHover={{ scale: 1.01 }}
        >
          Ramdlan Faqih
        </motion.h1>

        <motion.div 
          className='flex gap-3 items-center'
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
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={social.href} target='_blank'>
                <div className="p-2.5 bg-background border border-border rounded-md hover:border-foreground/30 transition-colors">
                  <social.icon className='w-5 h-5 text-foreground' />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          variants={itemVariants}
        >
          I am a frontend developer specializing in React and React Native, with experience in web and mobile application development. I graduated from Pijar Camp&apos;s Fullstack Web & Mobile Developer bootcamp by Telkom Indonesia. I have a broad interest in all things tech.
        </motion.p>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href={"mailto:ramfaqih@gmail.com"}>
            <div className="mt-6 px-6 py-3 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors inline-block">
              <span className="text-base font-medium">Contact Me</span>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default SectionOne
