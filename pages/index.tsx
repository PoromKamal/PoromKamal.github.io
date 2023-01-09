import Container from '../components/container'
import Image from 'next/image'
import Subtitle from '../components/subtitle'
import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';

function HomePage() {
  const typed = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "How's it going?",
        "I\'m Porom",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    typed.current = new Typed(el.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <>
      <Container>
        <div className="space-y-6">
          <br />
          <br />
          <h1 className="lg:text-6xl text-3xl font-semibold pt-48">
            <div className='w-max'>
             Hey <div className='inline flex-1 lg:text-5xl text-2xl'>👋</div>,
            </div>
            <div className="type-wrap w-max">
              <span className="pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent inline" style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
          </h1>
          <br />
          <div className='text-2xl pb-60'>
            I'm a 20 year-old Software Engineer based in <div className='inline font-semibold'>Toronto</div>
            <br />
            I enjoy <div className='inline font-semibold'>Full-Stack</div> development (mostly the <div className='inline font-semibold'>Backend</div> lol)
            <br />
            I do other stuff too, you can learn about it here :)
          </div>
          <div className='py-12' />

          <div id="about-section">
            <EducationSection />
          </div>

          <div id="experience-section">
            <ExperienceSection />
          </div>

          <div id="skills-section" className='py-12'>
            <SkillsSection />
          </div>

          <div id="project-section">
            <ProjectSection />
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
