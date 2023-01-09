import React from 'react'
import Image from 'next/image';
import javaIcon from './images/java.png';
import cSharpIcon from './images/csharplogo.png';
import cppIcon from './images/cppLogo.png';
import jsIcon from './images/jsicon.png';
import tsIcon from './images/tsIcon.png';
import pythonIcon from './images/pythonIcon.png';
import htmlIcon from './images/htmlIcon.png';
import cssIcon from './images/cssIcon.png';
import sqlIcon from './images/sqlIcon.png';
import reactIcon from './images/reactIcon.png';
import nodeIcon from './images/nodeIcon.png';
import dockerIcon from './images/dockerIcon.webp';
import springIcon from './images/springIcon.png';
import mongoIcon from './images/mongIcon.webp';
import postgresIcon from './images/postgresIcon.png';
import androidIcon from './images/androidIcon.png';
import neo4jIcon from './images/neo4jIcon.png';
import atlassianIcon from './images/atlassian.png';
import gitIcon from './images/gitIcon.png';
import tailwindIcon from './images/tailwindIcon.jpg';
import nextjsIcon from './images/nextjsIcon.png';
import mobilenodejsIcon from './images/mobilenodejsIcon.png'


export default function MobileSkills() {
    return (
        <>
            <div className='flex flex-col w-full'>
                <div className="text-lg font-semibold pb-5"> Languages </div>
                <div className='flex justify-between w-full'>
                    <div>
                        <div className="">
                            <Image src={javaIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <Image src={cSharpIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <Image src={cppIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>
                    </div>
                    <div className="">
                        <Image src={jsIcon}
                            width={40}
                            height={40}
                            alt="image"
                        />
                    </div>
                    <div>
                        <Image src={tsIcon}
                            width={40}
                            height={40}
                            alt="image" />
                    </div>

                    <div className="">
                        <Image src={pythonIcon}
                            width={40}
                            height={40}
                            alt="image" />
                    </div>

                    <div className="">
                        <Image src={htmlIcon}
                            width={40}
                            height={40}
                            alt="image"
                        />
                    </div>
                </div>

                <div className='w-full pt-5'>
                    <div className="font-semibold pb-5 justify-between text-lg"> Technologies </div>
                    <div className='flex flex-wrap gap-x-2'>
                        <div className="">
                            <Image src={reactIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>

                        <div className="">
                            <Image src={mobilenodejsIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>

                        <div className="">
                            <Image src={dockerIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>

                        <div className="">
                            <Image src={springIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>

                        <div className="">
                            <Image src={mongoIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>

                        <div className="">
                            <Image src={postgresIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>


                        <div className="">
                            <Image src={androidIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>

                        <div className="">
                            <Image src={neo4jIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>

                        <div className="">
                            <Image src={tailwindIcon}
                                width={50}
                                height={50}
                                alt="image" />
                        </div>

                        <div className="">
                            <Image src={nextjsIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>

                        <div className="">
                            <Image src={gitIcon}
                                width={40}
                                height={42}
                                alt="image" />
                        </div>


                        <div className="">
                            <Image src={atlassianIcon}
                                width={40}
                                height={40}
                                alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}