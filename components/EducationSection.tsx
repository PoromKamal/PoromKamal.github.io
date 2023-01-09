import React from 'react'
import Subtitle from './subtitle'
import uoftLogo from "./uoftlogo.png"
import Image from 'next/image'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce'
import Container from './container'
import HeadShake from 'react-reveal/HeadShake';
import Head from 'next/head';
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
export default function EducationSection() {

    return (
        <>
            <div className='text-lg '>
                <div className='text-base'>
                    <Pulse>
                        <br />
                        <Subtitle><div className="pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent inline">|</div>&nbsp;&nbsp;&nbsp;Education 🎓</Subtitle>
                        <br />
                        <div className='py-1 w-7/12'>
                            <div className='h-0.5 bg-current' />
                        </div>
                        <div className='relative w-full'>
                            <div className='inline font-semibold'>University of Toronto</div>
                            <div className='text-base inline absolute top-0 right-0 font-bold'>
                                2020-2024
                            </div>
                        </div>
                        <div className='italic font-medium'>
                            Honours Bachelors of Science,
                        </div>
                        Specialist in Computer Science, Software Engineering Stream
                        <br />
                        <br />
                        <div className="font-medium">
                            Some Interesting Courses I'm Taking:
                        </div>
                    </Pulse>
                    <ul className='list-disc space-y-3 pl-5'>
                        <Pulse>
                            <li>
                                <div className='inline font-semibold'>CSCD01</div>: Engineering Large Software Systems
                                <br />
                                <div className='inline italic'>Did some open source software in teams</div>
                            </li>

                            <li>
                                <div className='inline font-semibold'>CSCC01</div>: Introduction To Software Engineering
                                <br />
                                <div className='inline italic'>Led development of a cool fitness app</div>
                            </li>

                            <li>
                                <div className='inline font-semibold'>CSCC11</div>: Introduction To Machine Learning and Data Mining
                                <br />
                                <div className='inline italic'>Learned how to make machines learn</div>
                            </li>

                            <li>
                                <div className='inline font-semibold'>CSCC24</div>: Principles of Programming
                                <br />
                                <div className='inline italic'>Did some functional, procedural, and logic programming</div>
                            </li>
                        </Pulse>
                    </ul>
                </div>
                <br />
                <br />
            </div>
        </>
    )

}