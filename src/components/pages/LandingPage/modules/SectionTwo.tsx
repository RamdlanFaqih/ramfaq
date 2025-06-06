import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const projects = [
  {
    title: 'Visi 8 Webcomic',
    description: 'React Native, Zustand',
    image: '/images/visi8.png',
    associatedWith: 'Rogatekno',
  },
  // {
  //   title: 'Company Profile',
  //   description: 'Next JS, Motion',
  //   image: '/images/company_profile.png',
  //   associatedWith: 'Orbit Tech',
  // },
  // {
  //   title: 'Karpous Mobile App',
  //   description: 'React Native, Zustand, Tanstack Query',
  //   image: '/images/karpous_playstore.jpg',
  //   associatedWith: 'Orbit Tech',
  // },
  // {
  //   title: 'Fairway Golf',
  //   description: 'Next JS, Google 3D Maps Photorealistic API',
  //   image: '/images/fairway.png',
  //   associatedWith: 'Orbit Tech',
  // },
  // {
  //   title: 'Asset Owner Dashboard',
  //   description: 'Next JS, Zustand, Tanstack Query, Recharts',
  //   image: '/images/asset_owner.png',
  //   associatedWith: 'Orbit Tech',
  // },
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
  return (
    <section className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-xl md:text-4xl font-bold bg-secondary inline-block px-4 py-1">
            Projects
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-b-4 border-black pt-0 hover:shadow-md transition"
            >
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <Image
                    src={project.image}
                    alt={`Project image ${index}`}
                    width={600}
                    height={300}
                    className="w-full h-[200px] object-cover rounded-t-xl mb-4"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {project.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      associated with{' '}
                      <span className="font-medium">
                        {project.associatedWith}
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
