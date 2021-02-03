import React, { useContext, useState } from "react"
import "./Cost.css"
import { useHistory } from 'react-router-dom';
import { CategoryContext } from "./CategoryProvider";



export const CategoryForm = () => {
    const { addCategories } = useContext(CategoryContext)
    
    const [category, setCategories] = useState({
      
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
      const newCategory = { ...category }
      let selectedVal = event.target.value
      
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      newCategory[event.target.id] = selectedVal
      setCategories(newCategory)
    }

    const handleClickSaveLocation = (event) => {
      event.preventDefault() 
        
        addCategories(category)
        .then(() => history.push("/trips/detail/:tripId(/d+)"))
      
    }

    return (
      <form className="categoryForm">
          <h2 className="categoryForm__title">Add an Expense</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="expense">Expenses:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={category.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="address">Location address:</label>
                  <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.address}/>
              </div>
          </fieldset>
          
          <button className="btn btn-primary"
            onClick={handleClickSaveLocation}>
            Save Expenses
          </button>
      </form>
    )
}