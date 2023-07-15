import React, { useState } from 'react';
import './ExpenseItem.css'
import Card from './Card';


function ExpenseItem(props) {

    // const [title,setTitle] = useState("")
    // const clickHandler = ()=>{
    //     setTitle(title)
    // }
    // const changeHandler = (event)=>{
    //     setTitle(event.target.value)
    // }


    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear();
    return (
        <div>
            <Card className='expense-item'>
                <div>{day}-{month}-{year}</div>
                <div className='expense-item__description'>
                    <h4>{props.title}</h4>
                    <div className='expense-item__price'>{props.amount}</div>
                </div>

                {/* <input type='text' value={title} onChange={changeHandler}/>
            <button >Add Title</button> */}
            </Card>
            
        </div>


    );
}

export default ExpenseItem;