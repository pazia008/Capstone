import React, { useContext, useState, useEffect } from "react"
import "./Cost.css"
import { useHistory, useParams} from 'react-router-dom';
import { CategoryContext } from "./CategoryProvider";
import { CostContext } from "./CostProvider";



//adds new expenses to a trip
export const CategoryForm = () => {
  const { addCosts } = useContext(CostContext)
  const {tripId} = useParams()
  const { categories, getCategories } = useContext(CategoryContext)
  
  
  const [cost, setCosts] = useState({
      tripId: parseInt(tripId),
      categoryId: 0,
      name: "",
      cost: "" 
  });

  const history = useHistory();
  

  useEffect(() => {
        getCategories()
      }, [])



  const handleControlledInputChange = (event) => {
    const newCost = { ...cost }
    let selectedVal = event.target.value

    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    newCost[event.target.id] = selectedVal
    setCosts(newCost)
  }

  const handleClickSaveLocation = (event) => {
    event.preventDefault()

    addCosts(cost)
      .then(() => history.push("/trips"))

  }
console.log(categories)

//form users will fill out to save a new cost to a trip
  return (
    <form className="categoryForm">
      <h2 className="categoryForm__title">How Much is This Bad Boy Gonna Cost?</h2>

      <fieldset>
          <div className="form-group">
            <label htmlFor="location">Add an Expense: </label>
            <select value={cost.categoryId} name="categoryName" id="categoryId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select an Expense</option>
              { categories.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Name" value={cost.name} />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="cost">Cost:</label>
          <input type="number" id="cost" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="$$$" value={cost.cost} />
        </div>
      </fieldset>

      <button className="btn btn-primary"
        onClick={handleClickSaveLocation}>
        Save Expenses
          </button>
    </form>
  )
}
