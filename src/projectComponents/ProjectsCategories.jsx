import { useState } from 'react';
import CategoryButton from './CategoryButton';


const ProjectsCategories = ({uniqueCategoryLabelsArray, onFilterProjectsSetter}) => {
// const ProjectsCategories = ({categories, onFilterProjects}) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const clickedCategoryLabelHandler = (categoryLabel) => {
        setActiveCategory(categoryLabel);
        onFilterProjectsSetter(categoryLabel);
        console.log("clicked category label"+ categoryLabel)
    }

  return (
    <div className='portfolio__categories flex justify-center gap-[1vw]'>
        {
            uniqueCategoryLabelsArray.map(categoryLabel => (


                <CategoryButton
                key={categoryLabel} // Unique identifier for the component
                categoryLabel={categoryLabel} // Category value to be displayed on the button
                clickedCategoryLabelHandler={() => clickedCategoryLabelHandler(categoryLabel)} // Function to be called when the button is clicked
                className={`transition duration-500 ease transform
                hover:-translate-y-1 hover:scale-110 scale-100 ${activeCategory === categoryLabel ? 'btn-primary' : 'btn-secondary'}`} // If the activeCategory is the same as the category of a button, then set the CSS class to primary. Otherwise, set it to white.
                />
            ))
        }
    </div>
  )
}

export default ProjectsCategories