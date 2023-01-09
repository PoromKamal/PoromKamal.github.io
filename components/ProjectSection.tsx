import React from "react"
import Subtitle from "./subtitle"
import Pulse from 'react-reveal/Pulse';
import ProjectCard from "./ProjectCard";

export default function ProjectSection(){
    return(
        <>
            <Pulse>
                <Subtitle>
                    <div className="pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent inline">
                    |</div>&nbsp;&nbsp;&nbsp;Projects 🚀
                </Subtitle>
                <br/>
                <div className='py-1 pb-10 w-7/12'>
                    <div className='h-0.5 bg-current'/>
                </div>

                <ul className="flex flex-wrap grow">
                    <li>
                        <ProjectCard name={"GainzHub"} description={"Fitness, and content creation mobile platform consisting of nutrition tracking, workout creation, progress tracking, and social media features similar to Instagram "} 
                                githubUrl={"https://github.com/PoromKamal/GainzHub"}
                                tech = {"Node.js (Express.js), React Native, AWS S3, MongoDB, Expo"}/>
                    </li>
                    <li>
                        <ProjectCard name={"FreshCart"} description={"Instacart inspired grocery shopping Android App, using Java, and Android Studio."} 
                                githubUrl={"https://github.com/PoromKamal/FreshCart"}
                                tech = {"Java, Android Studio, XML, Mockito, Firebase"}/>
                    </li>
                    <li>
                        <ProjectCard name={"Desktop Analyst"} description={"Desktop app to statistically analyze stock metrics using Python, YFinanceAPI, and autogenerate detailed report on stock strengths, and weaknesses"}
                                githubUrl={"https://github.com/PoromKamal/DesktopAnalyst"}
                                tech={"Python, TKinter, YFinanceAPI"}/>
                    </li>
                    <li>
                        <ProjectCard name={"World Vaccine Rebalancer"} description={"Innovative solution to world vaccine shortage, by developing software to rebalance vaccine stock throughout countries. Our algorithm projects an increase in world vaccination rate by 45%"} 
                                githubUrl={"https://github.com/PoromKamal/World-Vaccine-Rebalancer"}
                                tech={"Python, TKinter, Plotly"}/>
                    </li>
                    <li>
                        <ProjectCard name={"Porom's Portfolio"} description={"Porom Kamal's Personal Website/Portfolio."} 
                                githubUrl={"https://github.com/PoromKamal/Porom"}
                                tech={"Next.js, Typescript, Tailwindcss, Github Actions"}/>
                    </li>
                </ul>
                </Pulse>
        </>
    )
}