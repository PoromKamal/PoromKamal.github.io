import fi from 'date-fns/esm/locale/fi/index.js'
import Link from 'next/link'
import Container from '../components/container'

export default function SideNav() {
  function handleOnClick(section){
    if(section == 1){
      const element = document.getElementById("about-section")
      if(element){
        element.scrollIntoView({behavior:'smooth'})
      }
    }
    else if(section == 2){
      const element = document.getElementById("experience-section")
      if(element){
        element.scrollIntoView({behavior: 'smooth'})
      }
    }
  }
  return (
    <div className="py-6 max-w-fit fixed top-96 right-1 pr-52">
      <Container>
        <div className='flex justify-end'>
        <div className="flex flex-col space-x-4 items-end font-bold"> 
            <button onClick={()=>handleOnClick(1)}>| Education</button>
            <button onClick={()=>handleOnClick(2)}>| Experience</button>
        </div>
        </div>
      </Container>
    </div>
  )
}
