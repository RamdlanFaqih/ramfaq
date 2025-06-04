import React from 'react'
import SectionOne from './modules/SectionOne'
import SectionTwo from './modules/SectionTwo'
import Timeline from './modules/Timeline'
import YoutubeChannel from './modules/YoutubeChannel'

const LandingPage = () => {
    return (
        <>
        <div className='bg-white'>
            <SectionOne />
            <Timeline />
            <SectionTwo />
            <YoutubeChannel />
        </div>
        </>
    )
}

export default LandingPage