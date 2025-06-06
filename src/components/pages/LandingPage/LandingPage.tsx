import React from 'react'
import SectionOne from './modules/SectionOne'
import SectionTwo from './modules/SectionTwo'
import Timeline from './modules/Timeline'
import YoutubeChannel from './modules/YoutubeChannel'
import ToggleTheme from '@/components/toggleTheme'

const LandingPage = () => {
    return (
        <>
        <div className=''>
            <section id='navbar' className='flex items-center justify-between py-5 px-6'>
                <h1 className='text-primary'>Ramdlan Faqih</h1>
                <ToggleTheme />
            </section>
            <SectionOne />
            <Timeline />
            <SectionTwo />
            <YoutubeChannel />
        </div>
        </>
    )
}

export default LandingPage