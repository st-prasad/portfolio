import React from 'react'

// const CategoryButton = ({categoryItem, className, onChangeCategory}) => {
const CategoryButton = ({categoryLabel, className, clickedCategoryLabelHandler}) => {
    console.log("category button labels -"+ categoryLabel)
  return (
    <button className={className} onClick={() => clickedCategoryLabelHandler(categoryLabel)} >{categoryLabel}</button>
  )
}

export default CategoryButton