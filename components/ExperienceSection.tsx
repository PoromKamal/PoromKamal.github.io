import React from "react";
import Pulse from 'react-reveal/Pulse';
import Image from "next/image";
import Subtitle from "./subtitle";

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
                        <div className='inline font-semibold text-xl'>Seequent                     
                        <Image
                            className='inline px-1'
                            src="./seequent.jpg"
                            width={35}
                            height={35}
                            alt="Seequent Logo"
                            />
                            (Bentley Systems)</div>
                        <div className='text-base absolute top-0 right-0 font-bold pl-9 w-7/12'>
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
                    </Pulse>
                </ul>
            </div>
        </>
    )
}