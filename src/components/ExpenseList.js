import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } =  useContext(AppContext);

  return(
    
    <table className="table">
      
      <thead className="thead-light">
        <tr className="col">Departament</tr>
        <tr className="col">Allocated Budget</tr>
        <tr className="col">Increase</tr>
        <tr className="col">Delete</tr>
      </thead>

      <tbody>
        {
          expenses.map((expense) => (
            <ExpenseItem id={expense.id} 
              key={expense.id} 
              name={expense.name} 
              cost={expense.cost} 
            />
          ))
        }
      </tbody>
      
    </table>

  )
}

export default ExpenseList;
