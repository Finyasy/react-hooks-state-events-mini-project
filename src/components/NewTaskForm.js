import React, {useState} from "react";

function NewTaskForm({categories, onAddTasks}) {
  const [inputValue, setInputValue] = useState({
    text: "",
    category: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputValue({...inputValue, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTasks(inputValue);
  }


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category, index) => {
            if(category !== "All") {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            } 
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
