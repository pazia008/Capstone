import React, { useContext, useState, useEffect } from "react"
import "./Pack.css"
import { useHistory, useParams} from 'react-router-dom';
import { PackingCategoryContext } from "./PackingCategoryProvider";
import { PackContext } from "./PackProvider";




//makes a form for users to fill out so they can add new items to pack to their trip

export const PackingCategoryForm = () => {
  const { addPacks } = useContext(PackContext)
  const {tripId} = useParams()
  const { packCategories, getPackingCategories } = useContext(PackingCategoryContext)
  
  //sets the state in the api
  const [pack, setPacks] = useState({
      tripId: parseInt(tripId),
      packingCategoryId: 0,
      name: ""
      
  });

  const history = useHistory();
  
//getPackingCategories will run after render
  useEffect(() => {
        getPackingCategories()
      }, [])



  const handleControlledInputChange = (event) => {
      //create a copy, make changes, and then set state
    const newPack = { ...pack }
    let selectedVal = event.target.value
//making sure the values are integers and not strings
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    //Set the property to the new value using object bracket notation
    newPack[event.target.id] = selectedVal
    //update the state
    setPacks(newPack)
  }

  //saves a new packing item then pushes users to the /trips link
  const handleClickSaveLocation = (event) => {
    event.preventDefault()

    addPacks(pack)
      .then(() => history.push("/trips"))

  }

//form users will fill out to save a new packing item
  return (
    <form className="packingCategoryForm">
      <h2 className="packingCategoryForm__title">What are we gonna need?</h2>

      <fieldset>
          <div className="form-group">
            <label htmlFor="pack">Get Packing: </label>
            <select value={pack.categoryId} name="pakingCategoryName" id="packingCategoryId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">What to Pack</option>
              { packCategories.map(l => (
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
          <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Name" value={pack.name} />
        </div>
      </fieldset>

      <button className="btn btn-primary"
        onClick={handleClickSaveLocation}>
        Save Your Items
          </button>
    </form>
  )
}