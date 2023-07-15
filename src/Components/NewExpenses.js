import React from "react";
import './NewExpenses.css'
import { ExpenseForm } from "./ExpenseForm";

export const NewExpenses = (props) =>{

    const expenseDataHandler = (newExpenses)=>{
       const expense = {
        ...newExpenses,
        id:1
       }
       props.saveExpenseData(expense);

    }
    return (
        <div className="new-expense">
            <ExpenseForm  onSaveExpenseData={expenseDataHandler}/>
        </div>
    )
}