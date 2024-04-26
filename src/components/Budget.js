import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const MAX_BUDGET = 20000
const Budget = () => {
    const { budget, expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { currency } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        if (event.target.value <= 20000)
            setNewBudget(event.target.value);

        else if (event.target.value > MAX_BUDGET)
            alert(`Budget may not exceed ${currency}${MAX_BUDGET}`);

        // Additional validation with totalExpenses
        const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);
        if (event.target.value < totalExpenses) {
            alert(`Budget must cover total expenses of ${currency}${totalExpenses}`);
        }
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} ></input>
        </div>
    );
};
export default Budget;