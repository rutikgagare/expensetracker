import React from 'react';
import './ExpenseFilters.css';

const ExpenseFilters = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label >Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>   
        </div>
    )
}

export default ExpenseFilters;
