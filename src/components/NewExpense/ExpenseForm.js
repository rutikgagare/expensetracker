import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    // event object which we get in the function inside addeventlistner similar object we get inside the function called by the event.

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value); 

        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // });

        // or

        // setUserInput((prevState) =>{
        //     return {...prevState,enteredTitle:event.target.value};
        // });
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // });

        // or

        // setUserInput((prevState) =>{
        //     return {...prevState,enteredAmount:event.target.value};
        // });
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // });

        // or

        // setUserInput((prevState) =>{
        //     return {...prevState,enteredDate:event.target.value};
        // });
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const ExpenseData = {
            id:Math.random(),
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log(ExpenseData);
        // passing data to parent i.e NewExpense
        props.onSaveExpenseData(ExpenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>

            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label >Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label >Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01"
                     onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label >Date</label>
                    <input type="date" value={enteredDate} min="2023-01-01" max="2031-01-01" 
                    onChange={dateChangeHandler}/>
                </div>

            </div>

            <div className='new-expense__action'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm