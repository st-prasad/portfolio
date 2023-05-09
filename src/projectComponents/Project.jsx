import Card from './Card'
// import vite.svg as placeholder image from public/images
import placeholderImg from '/images/vite.svg'


const Project = ({project}) => {

  const handleClick = () => {
    console.log('Card clicked!')
  }

  return (



    <Card className="w-[40%] lg:w-[20%] mx-[5%] mb-4 portfolio__project animate-fade-in duration-500 flex flex-col justify-between shadow-xl" handleClick={handleClick}>

        <div className="portfolio__project-image">
            <img src={project.image ? project.image : placeholderImg}  className="object-cover w-full h-60" alt="Portfolio Project Image" />

        </div>
        <h4 className='h-16'>{project.title}</h4>
        <p className='max-h-24 overflow-y-auto h-14 border-4 border-[#f0fff0]'>{project.desc}</p>
        <div className="flex gap-[3%] justify-center">
            {project.demo && <a href={project.demo} className="btn" target="_blank" rel="noopner noreferrer">Demo</a>}
            <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">Gitbub</a>
        </div>
    </Card>

  )
}

export default Project