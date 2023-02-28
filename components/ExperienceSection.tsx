import React from "react";
import Pulse from 'react-reveal/Pulse';
import Image from "next/image";
import Subtitle from "./subtitle";
import seequentIcon from './images/seequent.jpg';

export default function ExperienceSection(){
    return(
        <>
            <Pulse duration={600}>
                <div>
                    <Subtitle>
                        <div className="pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent inline">
                            |</div>&nbsp;&nbsp;&nbsp;Experience 💼
                    </Subtitle>
                        <br/>
                        
                </div>
                <div className='py-1  w-7/12'>
                    <div className='h-0.5 bg-current'/>
                </div>
            </Pulse>
            <div className='text-base'>
                <div className='relative '>
                    <Pulse>
                        <div className='inline font-semibold text-xl w-full'>
                            Seequent                     
                        <Image
                            className='inline px-1'
                            src={seequentIcon}
                            width={35}
                            height={35}
                            alt="Seequent Logo"
                            />
                            (Bentley Systems)</div>
                        <div className='text-base md:absolute md:top-0 md:right-0 font-bold md:pl-9 w-7/12'>
                            Jan 2022 - Aug 2022 (8 mo)
                        </div>
                        <div className='italic font-medium'>
                            Toronto, ON
                        </div>
                    </Pulse>
                </div>

                <ul className='list-disc space-y-3 pl-5'>
                    <Pulse>
                        <li>
                            Maintained and developed modelling, and geo-data management software that detect, analyze, and classify UXOs (Unexploded Ordinances) 
                            <br/> such as missiles, mines, and bullets over terrain.
                        </li>
                        <li>
                            Constructed HDF5 data packet processing pipeline using C#, C++, and .NET framework, leveraging multi-threading to significantly improve file parsing performance.
                        </li>
                        <li>
                        	Architected data visualization “AltitudeQC” tool using C# to process sensor altitude data and render map of terrain using C++ OpenGL libraries. 
                            <br/>Project commissioned by the US Army Corps.
                        </li>
                        <li>
                            Refactored over 10,000 lines of legacy HDF4 data processing pipeline code using SOLID principles and OOP design patterns, 
                            <br/>significantly reducing future technical debt, and improving code reusability with future HDF file releases.
                        </li>
                        <li>
                            Developed automated unit tests using Bamboo, CUnit, and Moq with 100% code coverage.
                        </li>
                        <li>
                            Received performance review of “Outstanding, with exceptional performance, and unique contributions”. 
                            <br/>With key feedback being Strong Technical Skills, professional conduct, and full-time developer level contributions. 
                        </li>
                    </Pulse>
                </ul>
            </div>
        </>
    )
}