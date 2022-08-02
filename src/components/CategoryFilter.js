import React, {useState}from "react";

function CategoryFilter({categories}) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => {
        return (
          <button key={index} onClick={() => setIsSelected(!isSelected)}>
            {category}
          </button>
        );
      }
      )}
    </div>
  );
}

export default CategoryFilter;
