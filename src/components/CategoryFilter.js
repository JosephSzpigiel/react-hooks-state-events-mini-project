import React from "react";

function CategoryFilter({categories, onSelect, selectedCategory}) {

  const categoryButtons = categories.map((category)=>{
    return ( 
    <button 
      key={category} 
      onClick={onSelect}
      className ={(category === selectedCategory) ? 'selected':null}>{category}</button> 
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
