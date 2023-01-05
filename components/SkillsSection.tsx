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
            <div className='pb-10 w-7/12'>
                <div className='h-0.5 bg-current'/>
            </div>
        <div className='flex pl-28 w-7/12 justify-around'>
            <div className="text-lg">
                <div className="font-semibold pb-5"> Languages </div>
                <div className='flex'>
                    <ul className='space-y-8 pl-5 text-base'>
                        <li>
                            <div className="image">
                                <Image src="./java.png" 
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
                                <Image src="./csharplogo.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    C#
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="image">
                                <Image src="./cppLogo.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    C/C++
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="image">
                                <Image src="./jsicon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"
                                    />
                                <Image src="./tsIcon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    Javascript/Typescript
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className='space-y-8 pl-5 text-base'>
                        <li>
                            <div className="image">
                                <Image src="./pythonIcon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    Python
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="image">
                                <Image src="./htmlIcon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"
                                    />
                                <Image src="./cssIcon.png" 
                                    width={45.8}
                                    height={46}
                                    alt="image"/>
                                <div className="text">
                                    HTML/CSS
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="image">
                                <Image src="./sqlIcon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    SQL
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='pr-12'>
                <div className='h-96 bg-gray-400 w-0.5'></div>
            </div>

            <div className='text-lg'>
                <div className="font-semibold pb-5"> Technologies </div>
                <div className='flex'>
                    <ul className='space-y-3 pl-5 text-base'>
                        <li>
                            <div className="image">
                                <Image src="./reactIcon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    React/React Native
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="image">
                                <Image src="./nodeIcon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    Node.js
                                </div>
                            </div>
                        </li>

                        
                        <li>
                            <div className="image">
                                <Image src="./dockerIcon.webp" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    Docker
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="image">
                                <Image src="./springIcon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    Spring
                                </div>
                            </div>
                        </li>
                    </ul>

                    
                    <ul className='space-y-3 pl-5 text-base'>
                        <li>
                            <div className="image">
                                <Image src="./mongIcon.webp" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    MongoDB
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="image">
                                <Image src="./postgresIcon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    PostgreSQL
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="image">
                                <Image src="./androidIcon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    Android Studio
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="image">
                                <Image src="./neo4jIcon.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    Neo4j
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="image">
                                <Image src="./atlassian.png" 
                                    width={40}
                                    height={40}
                                    alt="image"/>
                                <div className="text">
                                    Jira/Confluence/
                                    <br/>
                                    Bamboo 
                                    <br/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </Pulse>
    </>
    )
}