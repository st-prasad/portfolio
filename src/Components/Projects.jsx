import React from 'react'
import ProjectsSlider from './ProjectsSlider'

function Projects() {
  return (
    <section id='projects' className="section bg-sky-900 w-full h-full">
        <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-['projects'] relative before:absolute before:opacity-40 before:top-[2rem] before:left-64 before:hidden before:lg:block">eit7wgfkhie</h2>
            <p className="subtitle">
                giuhukhowgh
            </p>
        </div>
        <ProjectsSlider/>
    </section>
  )
}

export default Projects