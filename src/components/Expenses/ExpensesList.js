import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {

    let ExpenseContent = <p className = "expenses-list__fallback" >No expenses found</p>

    if(props.data.length > 0){
        ExpenseContent = props.data.map((item)=>
        <ExpenseItem 
          key = {item.id}
          title = {item.title} 
          date = {item.date} 
          amount = {item.amount}>
        </ExpenseItem>
    )};
    
  return (
    <ul className = 'expenses-list'>
      {ExpenseContent}
    </ul>
    
  )
}

export default ExpensesList