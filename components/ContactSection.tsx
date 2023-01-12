import React from 'react'
import Pulse from 'react-reveal/Pulse'
import Subtitle from './subtitle'

export default function ContactSection(){
    
    return(
        <>
            <Pulse>
                <Subtitle>
                    <div className="pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent inline">
                    |</div>&nbsp;&nbsp;&nbsp;Contact/Links ☎️
                </Subtitle>
                <br/>
                <div className='pb-10 w-7/12'>
                    <div className='h-0.5 bg-current'/>
                </div>
            </Pulse>
        </>
    )
}