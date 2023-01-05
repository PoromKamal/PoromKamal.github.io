import fi from 'date-fns/esm/locale/fi/index.js'
import Link from 'next/link'
import Container from '../components/container'
import Image from 'next/image'

export default function SideNav() {
  function handleOnClick(sectionNum){
    let section = ""
    switch(sectionNum){
      case 1:
        section = "about-section"
        break
      case 2:
        section = "experience-section"
        break
      case 3:
        section = "skills-section"
        break
      case 4:
        section = "project-section"
        break
    }

    const element = document.getElementById(section)
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  const handleGithubClick = (url) =>{
    window.open(url, "_blank", "noreferrer")
  }
  
  const handleEmail = () => {

  }

  return (
    <div className="py-6 max-w-fit fixed top-96 right-1 pr-24">
      <Container>
        <div className='flex justify-end'>
        <div className="flex flex-col items-start font-bold"> 
            <button onClick={()=>handleOnClick(1)}>| Education</button>
            <button onClick={()=>handleOnClick(2)}>| Experience</button>
            <button onClick={()=>handleOnClick(3)}>| Skills</button>
            <button onClick={()=>handleOnClick(4)}>| Projects</button>
        </div>
        </div>
        <div className='flex gap-2 py-3 pl-1'>
        <button onClick={()=>handleGithubClick("https://github.com/PoromKamal")}>
            <Image
                src="./github.png"
                width={21}
                height={21}
                alt={"github icon"}/>
          </button>
        <button onClick={()=>handleGithubClick("https://www.linkedin.com/in/porom-kamal-0207a9187/")}>
            <Image
                src="./linkedinIcon.png"
                width={21}
                height={21}
                alt={"github icon"}/>
        </button>

        <a href = "mailto: porom.kamal@mail.utoronto.ca">
          <Image
                  src="./emailIcon.png"
                  width={21}
                  height={21}
                  alt={"github icon"}/>
        </a>
        </div>
      </Container>
    </div>
  )
}
