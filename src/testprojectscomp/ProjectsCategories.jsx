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
    <div className='portfolio__categories'>
        {
            uniqueCategoryLabelsArray.map(categoryLabel => (

                // console.log("categoryItem"+ categoryItem);

                // <button key={category} category={category} onChangeCategory={() => changeCategoryHandler(category)} className={`btn cat__btn ${activeCategory == category ? 'primary' : 'white'}`}/>
                // <CategoryButton key={category} category={category} onChangeCategory={() => changeCategoryHandler(category)} className={`btn cat__btn ${activeCategory == category ? 'primary' : 'white'}`}/>
                
                // category is inique, so passed to key

                // <CategoryButton key={categoryItem} categoryItem={categoryItem} onChangeCategory={() => changeCategoryHandler(categoryItem)} className={`btn cat__btn ${activeCategory == categoryItem ? 'primary' : 'white'}`}/>

                <CategoryButton
                key={categoryLabel} // Unique identifier for the component
                categoryLabel={categoryLabel} // Category value to be displayed on the button
                clickedCategoryLabelHandler={() => clickedCategoryLabelHandler(categoryLabel)} // Function to be called when the button is clicked
                className={`btn cat__btn ${activeCategory == categoryLabel ? 'primary' : 'white'}`} // If the activeCategory is the same as the category of a button, then set the CSS class to primary. Otherwise, set it to white.
                />
            ))
        }
    </div>
  )
}

export default ProjectsCategories