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
export default function AboutSection(){

    return (
        <>
                        

            <div className='text-lg '>
                <Pulse duration={600}>
                <br/>
                    <Subtitle><div className="pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent inline">|</div>&nbsp;&nbsp;&nbsp;About Me</Subtitle>
                <br/>

                    <div>
                        <div className='inline text-2xl font-semibold'>
                            Education 🎓
                        </div>
                    </div>

                    <div className='py-1'>
                        <div className='h-0.5 bg-current'/>
                    </div>
                    <div className='relative'>
                        <div className='inline font-semibold'>University of Toronto</div>
                        <div className='text-base inline absolute top-0 right-0 font-bold'>
                            2020-2024
                        </div>
                    </div>
   
                    <div className='text-base'>
                        <div className='italic font-medium'>
                            Honours Bachelors of Science,
                        </div>
                        Specialist in Computer Science, Software Engineering Stream
                        <br/>
                        <br/>
                        <div className="font-medium">
                            Some cool courses I'm taking:
                        </div>
                        <ul className='list-disc space-y-3'>
                            <li>
                                <div className='inline font-semibold'>CSCD01</div>: Engineering Large Software Systems 
                                <br/>
                                <div className='inline italic'>Did some open source software in teams</div> 
                            </li>

                            <li>
                                <div className='inline font-semibold'>CSCC01</div>: Introduction To Software Engineering
                                <br/>
                                <div className='inline italic'>Led development of a cool fitness app</div> 
                            </li>

                            <li>
                                <div className='inline font-semibold'>CSCC11</div>: Introduction To Machine Learning and Data Mining 
                                <br/>
                                <div className='inline italic'>Learned how to make machines learn</div> 
                            </li>

                            <li>
                                <div className='inline font-semibold'>CSCC24</div>: Principles of Programming
                                <br/>
                                <div className='inline italic'>Did some functional, procedural, and logic programming</div> 
                            </li>
                        </ul>
                       
                    </div>
                    </Pulse>
                <br/>
                <br/>


                <Pulse duration={600}>
                    <div id = "experience-section">
                        <div className='inline text-2xl font-semibold'>
                            Experience 💼
                        </div>
                    </div>

                    <div className='py-1'>
                        <div className='h-0.5 bg-current'/>
                    </div>
                    <div className='text-base'>
                        <div className='relative '>
                            <div className='inline font-semibold text-xl'>Seequent &nbsp;                         
                            <Image
                                className='inline'
                                src="/seequent.jpg"
                                width={35}
                                height={35}
                                alt="Seequent Logo"
                                />
                                (Bentley Systems)</div>
                            <div className='text-base inline absolute top-0 right-0 font-bold'>
                                Jan 2022 - Aug 2022 (8 mo)
                            </div>
                            <div className='italic font-medium'>
                                Toronto, ON
                            </div>
                        </div>

                        <ul className='list-disc space-y-3'>
                            <li>
                            Maintained and developed modelling, and geo-data management software that detect, analyze, and classify UXOs
                            (Unexploded Ordinances) such as missiles, mines, and bullets over terrain.
                            </li>
                            <li>
                            Architected data processing/visualization “AltitudeQC” tool using C# and C++ to process raw UXO sensor altitude data, and
                            render map of terrain using C++ OpenGL libraries; commissioned by the US Army Corps.
                            </li>
                            <li>
                            Constructed HDF5 file data processing pipeline using C# and .NET framework while maintaining backwards compatibility 
                            with legacy the HDF4 file format.
                            </li>
                            <li>
                            Optimized runtime of some software tools for large data sets from 6 minutes to 1 minute, using data caching, multi-threading, and dynamic programming.
                            </li>
                            <li>
                            Refactored over 10,000 lines of legacy C# code bases using SOLID principles and other object-oriented design patterns
                            (Strategy, Template Method, Dependency Injection) for code cleanliness, and software reusability.
                            </li>
                            <li>
                            Developed build scripts using MSBuild, and applied continuous integration using Bamboo.
                            </li>
                            <li>
                            Implemented automated test suite using Moq, and CUnit with 100% code coverage.
                            </li>
                            <li>
                            Utilized agile development, and provided continuous team feedback, through code reviews, sprint planning, sprint reviews, 
                            and sprint retrospective meetings.
                            </li>
                        </ul>
                    </div>
                </Pulse>
            </div>
        </>
    )

}