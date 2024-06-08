import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const[newName, setNewName] = useState('')
  const[newCategory, setNewCategory] = useState('Produce')
  function handleNameChange(event){
    setNewName(event.target.value)
  }
  function CategoryChange(event){
setNewCategory(event.target.value)
  }
  function onSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newName,
      category: newCategory,
    };
    onItemFormSubmit(newItem)
  }
  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" value = {newName}onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value = {newCategory} onChange={CategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
