import Project from "./Project"

const Projects = ({projects}) => {
  return (
    <div className="portfolio__projects mt-12 flex flex-col items-center md:flex-row flex-wrap md:justify-center">
        {
            projects.map(project => (
                <Project key={project.id} project={project} />
            ))
        }
    </div>
  )
}

export default Projects