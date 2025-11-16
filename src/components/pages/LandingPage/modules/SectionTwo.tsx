"use client";

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const projects = [
  {
    title: 'Wanatix | Digital Ticketing',
    description: 'Next JS, Tailwind CSS, Midtrans',
    image: '/images/wanatix.png',
    associatedWith: 'Wanara Digital',
  },
  {
    title: 'Visi 8 Webcomic',
    description: 'React Native, Zustand',
    image: '/images/visi8.png',
    associatedWith: 'Rogatekno',
  },
  {
    title: 'Mojang Jajaka Landing Page',
    description: 'Laravel, Tailwind CSS',
    image: '/images/mojang_jajaka.png',
    associatedWith: 'Wanara Digital',
  },
  {
    title: 'Company Profile',
    description: 'Next JS, Motion',
    image: '/images/company_profile.png',
    associatedWith: 'Orbit Tech',
  },
  {
    title: 'Karpous Mobile App',
    description: 'React Native, Zustand, Tanstack Query',
    image: '/images/karpous_playstore.jpg',
    associatedWith: 'Orbit Tech',
  },
  {
    title: 'Fairway Golf',
    description: 'Next JS, Google 3D Maps Photorealistic API',
    image: '/images/fairway.png',
    associatedWith: 'Orbit Tech',
  },
  {
    title: 'Asset Owner Dashboard',
    description: 'Next JS, Zustand, Tanstack Query, Recharts',
    image: '/images/asset_owner.png',
    associatedWith: 'Orbit Tech',
  },
  {
    title: 'Mama Recipe',
    description: 'React, Redux, Axios',
    image: '/images/mamarecipe.png',
    associatedWith: 'Pijar Camp',
  },
  {
    title: 'Mama Recipe Mobile',
    description: 'React Native',
    image: '/images/mamarecipemobile.png',
    associatedWith: 'Pijar Camp',
  },
  {
    title: 'Blanja',
    description: 'React',
    image: '/images/blanja.png',
    associatedWith: 'Pijar Camp',
  },
  {
    title: 'Peworld',
    description: 'React',
    image: '/images/peworld.png',
    associatedWith: 'Pijar Camp',
  },
];

const SectionTwo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
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
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold text-foreground"
            whileHover={{ scale: 1.01 }}
          >
            Projects
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="neo-card overflow-hidden group p-0 h-full">
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    <motion.div
                      className="relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.image}
                        alt={`Project image ${index}`}
                        width={600}
                        height={300}
                        className="w-full h-[200px] object-cover transition-transform duration-300"
                      />
                    </motion.div>
                    <div className="p-5 flex flex-col flex-1">
                      <motion.h3 
                        className="text-lg font-semibold mb-2 text-foreground"
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-auto">
                        associated with{' '}
                        <span className="font-medium text-foreground">
                          {project.associatedWith}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionTwo;
