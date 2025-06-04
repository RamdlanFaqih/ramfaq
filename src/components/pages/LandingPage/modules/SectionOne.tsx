import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { Spotify } from 'react-spotify-embed'
import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

const SectionOne = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white text-center">
      {/* Avatar */}
      <div className="mb-10">
        <Avatar className="w-48 h-48 md:w-[300px] md:h-[300px] shadow-xl ring-4 ring-white rounded-full">
          <AvatarImage src="/images/profile.jpeg" alt="Ramdlan Faqih" />
          <AvatarFallback>RF</AvatarFallback>
        </Avatar>
      </div>
      {/* Name, Description, Contact */}
      <div className="max-w-2xl flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Ramdlan Faqih
        </h1>
        <div className='flex gap-3 items-center'>
          <Link href='https://www.linkedin.com/in/ramdlanfaqih/' target='_blank'>
            <Linkedin className='cursor-pointer' />
          </Link>
          <Link href='https://www.instagram.com/ramfaq_/' target='_blank'>
            <Instagram className='cursor-pointer' />
          </Link>
          <Link href='https://github.com/RamdlanFaqih' target='_blank'>
            <Github href='https://github.com/RamdlanFaqih' target='_blank' className='cursor-pointer' />
          </Link>
          <Link href='https://www.youtube.com/@RamdlanFaqih' target='_blank'>
            <Youtube href='https://www.youtube.com/@RamdlanFaqih' target='_blank' className='cursor-pointer' />
          </Link>
          <Link href='https://www.facebook.com/ramfaq02/' target='_blank'>
            <Facebook className='cursor-pointer' />
          </Link>
        </div>
        <p className="text-sm md:text-xl text-gray-700">
          I am a frontend developer specializing in React and React Native, with experience in web and mobile application development. I graduated from Pijar Camp&apos;s Fullstack Web & Mobile Developer bootcamp by Telkom Indonesia. I have a broad interest in all things tech.
        </p>
        {/* <Button className="bg-amber-300 text-lg md:text-xl px-6 py-3 text-black">Contact</Button> */}
      </div>

      <div className='mt-10'>
        <span className='text-xs md:text-lg'>
          Pro Tips: Play this song while exploring my site.<br />
          Thanks to <span className="font-semibold">Sharou</span> for this amazing track!
        </span>
        <div className='mt-5'>
          <Spotify link='https://open.spotify.com/track/5dtSo15FjmXOZ03nmNmLGN?si=3f38dab861e54a50' wide />
        </div>
      </div>
    </section>
  )
}

export default SectionOne
