import { useState } from 'react'
// import projects from '../ProjectData.js'
import { ProjectData } from '../portfolioData.js'
import '../styles/projectComponents.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'

const ProjectsMainPage = () => {
  const [projects, setProjects] = useState(ProjectData);


//  difference between array and set is that while an array can have duplicate values a set can't. Elements can be accessed in array using index which isn't possible in Set since it uses keys and elements can be traversed only in the way they were entered.

let uniqueCategoryLabelsArray = ["all"];

ProjectData.forEach(project => {
  project.category.forEach(category => {
    if (!uniqueCategoryLabelsArray.includes(category)) {
      uniqueCategoryLabelsArray.push(category);
    }
  });
});

//   const uniqueCategoryLabelsSet = new Set(categoryLabels);
//   uniqueCategoryLabelsSet.add("all")
// //   const uniqueCategories = ["all", ...new Set(categories)];
//   const uniqueCategoryLabelsArray = [...uniqueCategoryLabelsSet];
  console.log(uniqueCategoryLabelsArray)
  
  const filteredProjectsSetter = (categoryLabel) => {
    
    if(categoryLabel === "all") {
      setProjects(ProjectData);
      return;
    }

    // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

    // const filteredProjects = ProjectData.filter(items => items.category === categoryLabel);
    const filteredProjects = ProjectData.filter(items => items.category.includes(categoryLabel));

    setProjects(filteredProjects);
    console.log("filteredProjects from handler -"+ filteredProjects)
    console.log("clicked categoryLabel -"+ categoryLabel)
  }
  

  return (
    <section id="portfolio" className='bg-[#edebf8]'>
      <h2 className='text-center'>Some of My Projects</h2>
      <p className='text-center'>
      Use the buttons to toggle the  categories.
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

export default ProjectsMainPage