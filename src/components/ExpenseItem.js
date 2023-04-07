
import { TiDelete } from 'react-icons/ti';
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } =  useContext(AppContext);
  
  const handleDelete = () => {
    
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id
    })

  }
  
  const increaseAllocation = (name) => {
    
    const expense = {
      name: name,
      cost: 10
    }
    
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense
    })

  }

  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.cost}</td>
      <td><button onClick={event => increaseAllocation(props.name)} >+</button></td>
      <td><button><TiDelete size='1.5rem' onClick={handleDelete}></TiDelete></button></td>
    </tr>
  )
}

export default ExpenseItem;
