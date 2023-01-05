import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

export default function ProjectCard({name, description, githubUrl, tech}){
    const [projectName, setProjectName] = useState(name);
    const [projectDescription, setProjectDescription] = useState(description);
    const [github, setGithub] = useState(githubUrl);

    const handleGithubClick = () =>{
        window.open(githubUrl, "_blank", "noreferrer")
    }

    return(
        <>
            <div id="project-container" className='p-1'>
                <div className='w-96 h-80 rounded-2xl bg-gray-100 hover:animate-text hover:-translate-y-3 hover:bg-gradient-to-r hover:from-purple-500 hover:via-teal-200'>
                    <div id="card-header" className='flex relative pt-12 px-8 text-lg font-semibold'>
                        {name}
                        <div className='absolute top-5 right-5'>
                            <button onClick={()=>handleGithubClick()}>
                                <Image
                                    src="/github.png"
                                    width={30}
                                    height={30}
                                    alt={"github icon"}/>
                            </button>
                        </div>
                    </div>
                    <div id = "card-description" className='px-8 py-5 text-base'>{description}</div>
                    <div id = "card-tech" className='px-8 text-sm font-light'>{tech}</div>
                </div>
            </div>

        </>
    )
}