"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const timelineData = [
  {
    year: "2020-2023",
    title: "MA Sabilurrosyad",
    description: "Finished high school and prepared for the next journey",
    img: "/images/sabilurrosyad.jpg",
    href: 'https://www.instagram.com/masosissbr/'
  },
  {
    year: "2023",
    title: "Pijar Camp Fullstack Web & Mobile Developer Batch 14",
    description: "Intensive training in fullstack web and mobile development.",
    img: "/images/pijar_camp.svg",
    href: 'https://camp.pijarmahir.id/'
  },
  {
    year: "2024",
    title: "Rogatekno",
    description: "Started crafting real-world projects as a freelance frontend developer.",
    img: "/images/rogatekno.svg",
    href: 'https://www.rogatekno.com/en'
  },
  {
    year: "2024 - 2025",
    title: "Orbit Tech",
    description: "Leveled up as a full-time frontend developer, building clean and scalable interfaces.",
    img: "/images/orbit_tech.svg",
    href: 'https://orbitechsolution.com/'
  },
  {
    year: "2025 - Now",
    title: "Acaspace",
    description: "Mentoring the next wave of developers as a Fullstack JavaScript Mentor.",
    img: "/images/acaspace.png",
    href: 'https://orbitechsolution.com/'
  },
];

const Timeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-black dark:text-primary gradient-text"
            whileHover={{ scale: 1.02 }}
          >
            My Journey
          </motion.h2>
          <motion.p 
            className="text-lg text-text-primary mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Education & Experience
          </motion.p>
        </div>
      </motion.div>

      <motion.section 
        className="max-w-4xl mx-auto py-10 px-4 w-full min-h-screen"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="space-y-8 relative">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="neo-card max-w-2xl mx-auto">
                  <Link href={item.href} target="_blank">
                    <CardHeader className="flex flex-row items-start space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-primary">{item.year}</CardTitle>
                        <CardDescription className="text-sm font-semibold mt-1">{item.title}</CardDescription>
                        <CardDescription className="text-xs mt-1">{item.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Link>
                </Card>
              </motion.div>

              {/* Timeline connector line */}
              {idx < timelineData.length - 1 && (
                <motion.div 
                  className="absolute left-1/2 top-full w-0.5 h-8 bg-black dark:bg-primary mx-auto"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5 + idx * 0.2, duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Timeline;
