import Container from '../components/container'
import Image from 'next/image'
import Subtitle from '../components/subtitle'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import AboutSection from '../components/AboutSection';

function HomePage() {
  const typed = useRef(null);
  const el = useRef(null);
  useEffect(()=>{
    const options = {
      strings: [
        'I\'m Porom',
      ],
      typeSpeed: 50,
      backSpeed: 50,
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
          <h1 className="text-3xl font-semibold">
            Hey👋,
            <div className="type-wrap">
              <span className="pt-16 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent" style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
          </h1>
          <div className='text-lg'>
            I'm a 20 year-old Software Engineer based in <div className='inline font-semibold'>Toronto.</div>
            <br/>
            I enjoy <div className='inline font-semibold'>Full-Stack</div> development (mostly the <div className='inline font-semibold'>Backend</div> lol).
            <br/>
            I do other stuff too, you can learn about it here :)
          </div>
          <AboutSection/>
          
        </div>
      </Container>
    </>
  )
}

export default HomePage
