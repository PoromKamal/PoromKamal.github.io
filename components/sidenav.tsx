import fi from 'date-fns/esm/locale/fi/index.js'
import Link from 'next/link'
import Container from '../components/container'

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
        section = "project-section"
        break
    }

    const element = document.getElementById(section)
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }

  }
  return (
    <div className="py-6 max-w-fit fixed top-96 right-1 pr-24">
      <Container>
        <div className='flex justify-end'>
        <div className="flex flex-col items-start font-bold"> 
            <button onClick={()=>handleOnClick(1)}>| Education</button>
            <button onClick={()=>handleOnClick(2)}>| Experience</button>
            <button onClick={()=>handleOnClick(3)}>| Projects</button>
        </div>
        </div>
      </Container>
    </div>
  )
}
