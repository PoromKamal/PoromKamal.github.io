import React, { useEffect, useState } from 'react';
import Pulse from 'react-reveal/Pulse';
import Subtitle from './subtitle';
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
import DefaultSkills from './DefaultSkills';
import MobileSkills from './MobileSkills';

export default function SkillsSection(){
    const [smallScreen, setSmallScreen] = useState(false);
    const [width, setWidth] = useState(0);
    useEffect(()=>{
        function handleResize(){
            setWidth(window.innerWidth);
            setSmallScreen(window.innerWidth < 1000)
        }

        window.addEventListener("resize", handleResize)
        handleResize()
        
        return () => { 
          window.removeEventListener("resize", handleResize)
        }

    }, [width])

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
            {smallScreen ?  <MobileSkills/> : <DefaultSkills/>}
        </Pulse>
    </>
    )
}