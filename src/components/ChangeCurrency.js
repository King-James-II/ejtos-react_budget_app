import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(newCurrency);
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div className={`alert alert-success`}>            
            <label htmlFor="currency">Currency: </label>
            <select 
                name="currency" 
                id="currency" 
                value={selectedCurrency} 
                onChange={handleCurrencyChange}
            >
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default ChangeCurrency;