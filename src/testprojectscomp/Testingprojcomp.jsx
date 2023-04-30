import { useState } from 'react'
// import projects from '../ProjectData.js'
import { projectstempdata } from '../ProjectData'
import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'

const Portfolio = () => {
  const [projects, setProjects] = useState(projectstempdata);

//   a new array of categories from projectstempdata
  const categoryLabels = projectstempdata.map(item => item.category);
  console.log("category labels - " + categoryLabels)


//  difference between array and set is that while an array can have duplicate values a set can't. Elements can be accessed in array using index which isn't possible in Set since it uses keys and elements can be traversed only in the way they were entered.

  const uniqueCategoryLabelsSet = new Set(categoryLabels);
  uniqueCategoryLabelsSet.add("all")
//   const uniqueCategories = ["all", ...new Set(categories)];
  const uniqueCategoryLabelsArray = [...uniqueCategoryLabelsSet];
  console.log(uniqueCategoryLabelsArray)
  
  const filteredProjectsSetter = (categoryLabel) => {
    
    if(categoryLabel === "all") {
      setProjects(projectstempdata);
      return;
    }

    // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

    const filteredProjects = projectstempdata.filter(items => items.category === categoryLabel);
    // const filterProjects = projectstempdata.filter(project => project.category === category);
    setProjects(filteredProjects);
    console.log("filteredProjects from handler -"+ filteredProjects)
    console.log("clicked categoryLabel -"+ categoryLabel)
  }
  

  return (
    <section id="portfolio" className='bg-[#edebf8]'>
      <h2>Recent Projects</h2>
      <p>
      Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
      </p>
      {/* <div className="container portfolio__container my-0 mx-auto"> */}
      <div className="w-full portfolio__container my-0 mx-auto">
        <ProjectsCategories uniqueCategoryLabelsArray={uniqueCategoryLabelsArray} onFilterProjectsSetter={filteredProjectsSetter} />
        {/* <ProjectsCategories categories={uniqueCategoriesArray} onFilterProjects={filterProjectsHandler}/> */}
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio