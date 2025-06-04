import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const YoutubeChannel = () => {
    return (
        <section className="min-h-screen py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="mb-6">
                    <h2 className="text-xl md:text-4xl font-bold bg-amber-200 inline-block px-2 md:px-4 py-1">
                        Youtube Channel
                    </h2>
                </div>

                {/* Description */}
                <p className="text-sm md:text-xl text-gray-700 mb-5 max-w-3xl">
                    I&apos;m kicking off my own YouTube channel — a chill space where I share live streams, VODs, and whatever I feel like recording.
                    Sometimes I game, sometimes I code, and sometimes I just vibe. Come hang out!
                </p>

                <Link target='_blank' href={'https://www.youtube.com/@RamdlanFaqih'}>
                <Button className='bg-white text-black border border-b-3 border-[#FF0000] cursor-pointer mb-10'>
                   My Channel
                </Button>
                </Link>



                {/* Responsive YouTube Embed */}
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/poeOhYrZh-8?si=Wwk2MAinzlFzyfOT"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default YoutubeChannel
