import React from 'react'
import Pulse from 'react-reveal/Pulse'
import Subtitle from './subtitle'
import Image from 'next/image'

export default function SkillsSection(){
    return(
        <>
        <Pulse>
            <Subtitle>
                <div className="pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent inline">
                |</div>&nbsp;&nbsp;&nbsp;Skills 🛠️
            </Subtitle>
            <br/>
            <div className='py-1 pb-10 w-7/12'>
                <div className='h-0.5 bg-current'/>
            </div>
            <div className="text-lg">
                <div className="inline font-semibold"> Languages: </div> Java, C#, JavaScript/TypeScript, Python, C/C++, HTML, CSS, SQL
            </div>
        </Pulse>
        <div>
            <ul className='list-disc space-y-3 pl-5'>
                <li>
                    <div className="image">
                        <Image src="/java.png" 
                            width={40}
                            height={40}
                            alt="image"/>
                        <div className="text">
                            Java
                        </div>
                    </div>
                </li>

                <li>
                    <div className="image">
                        <Image src="/csharplogo.png" 
                            width={30}
                            height={30}
                            alt="image"/>
                        <div className="text">
                            C#
                        </div>
                    </div>
                </li>

                <li>
                    <div className="image">
                        <Image src="/Cppicon.png" 
                            width={30}
                            height={30}
                            alt="image"/>
                        <div className="text">
                            C/C++
                        </div>
                    </div>
                </li>

                <li>
                    <div className="image">
                        <Image src="/jsicon.png" 
                            width={30}
                            height={30}
                            alt="image"
                            />
                        <Image src="/tsIcon.png" 
                            width={30}
                            height={30}
                            alt="image"/>
                        <div className="text">
                            Javascript/Typescript
                        </div>
                    </div>
                </li>

            </ul>
        </div>

        </>
    )
}