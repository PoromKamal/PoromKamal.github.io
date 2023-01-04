import React from 'react'
import Subtitle from './subtitle'
import uoftLogo from "./uoftlogo.png"
import Image from 'next/image'
import Container from './container'
export default function AboutSection(){

    return (
        <>
            <Subtitle><div className="pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent inline">|</div>&nbsp;&nbsp;&nbsp;About Me</Subtitle>
            <div className='text-lg '>
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
                    Some cool courses:
                    <br/>
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

                <br/>
                <br/>

                <div>
                    <div className='inline text-2xl font-semibold'>
                        Experience 💼
                    </div>
                </div>

                <div className='py-1'>
                    <div className='h-0.5 bg-current'/>
                </div>
            </div>
        </>
    )

}