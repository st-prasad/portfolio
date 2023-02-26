import Card from './Card'


const Project = ({project}) => {

  const handleClick = () => {
    console.log('Card clicked!')
  }

  return (
    <Card className="portfolio__project transition-opacity ease-in-out" style={{ animationFillMode: 'forwards' }} handleClick={handleClick}>
        <div className="portfolio__project-image">
            <img src={project.image} className="object-contain w-full max-h-60" alt="Portfolio Project Image" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel="noopner noreferrer">Demo</a>
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopner noreferrer">Gitbub</a>
        </div>
    </Card>
  )
}

export default Project