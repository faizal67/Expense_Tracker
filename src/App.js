import React, { useEffect, useState } from "react";
import ExpenseItem from './Components/ExpenseItem.js';
import Card from './Components/Card.js';
import { NewExpenses } from "./Components/NewExpenses.js";

let dummy_expenses = [{

  id:'1',
  title:'food',
  amount:200,
  date: "2023-06-11 20:16:42"
  
}
];

// function fetchData() {
  // fetch('http://localhost/rest-api/getApi.php').then(
//     response => {
//       return response.json();
//     }
//   ).then(
//     data => {
//       setExpenses(data);
//     }
//   )
// }





function App() {
  // let expenseDate = new Date(2023,6,10);
  // let expenseTitle = "School fee";
  // let expenseAmount = 200
// useEffect(()=>{
//   fetchData();
// },[]);
  



  const [expenses, setExpenses] = useState(dummy_expenses)

  const expenseData = (expense) => {
    // fetch('http://localhost/rest-api/getApi.php',{
    //   method:'POST',
    //   body: JSON.stringify(expense),
    //   headers: {
    //     'content-type' : 'Application/json'
    //   }

    // }).then(
    //   Response =>{
    //     fetchData();
    //   }
    // )


    const updatedExpeses = [...expenses, expense];
    setExpenses(updatedExpeses)
  }
  return (
    <div>
      <Card color={'#a9c5ec'}>
        {
          expenses.map(it => (
            <ExpenseItem
              title={it.title}
              date={new Date(it.date)}
              amount={it.amount}
            />
          ))
        }
      </Card>
      <NewExpenses saveExpenseData={expenseData} />

    </div>
  );
}

export default App;
