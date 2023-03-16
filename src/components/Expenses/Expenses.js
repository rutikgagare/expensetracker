import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseFilters from './ExpenseFilters';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>

      <ExpenseFilters onChangeFilter = {filterChangeHandler} ></ExpenseFilters>
      <ExpenseChart expenses = {filteredExpenses}></ExpenseChart>
      <ExpensesList data = {filteredExpenses}></ExpensesList>

    </Card>
  );
}

export default Expenses;