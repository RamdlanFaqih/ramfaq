"use client";

import React from "react";
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
    description: "Engaged as a freelance frontend developer.",
    img: "/images/rogatekno.svg",
    href: 'https://www.rogatekno.com/en'
  },
  {
    year: "2024 - Now",
    title: "Orbit Tech",
    description: "Joined as a full-time frontend developer.",
    img: "/images/orbit_tech.svg",
    href: 'https://orbitechsolution.com/'
  },
];


const Timeline = () => {
  return (
    <>

      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">My Journey</h2>
          <p className="text-lg text-gray-600 mt-2">Education & Experience</p>
        </div>

      </div>
      <section className="relative max-w-4xl mx-auto py-10 px-4 w-full min-h-screen">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gray-300 h-full z-0"></div>
        <div className="space-y-20 relative z-10">
          {timelineData.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex items-center w-full ${isLeft ? "justify-start" : "justify-end"
                  }`}
                style={{ minHeight: "120px" }}
              >
                {/* Card with image, title, and description */}
                <Card className="max-w-sm w-full border-b-4 border-black">
                  <Link href={item.href} target="_blank">
                    <CardHeader className="flex items-start space-x-4">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={45}
                        height={45}
                        className="object-contain"
                      />
                      <div>
                        <CardTitle className="text-lg">{item.year}</CardTitle>
                        <CardDescription className="text-sm text-black">{item.title}</CardDescription>
                        <CardDescription className="text-xs">{item.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Link>
                </Card>

                {/* Timeline connector */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:flex flex-col items-center z-10 hidden ">
                  <div className="w-6 h-6 bg-amber-300 rounded-full border-2 z-20"></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Timeline;
