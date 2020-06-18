import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';

function AddTransaction() {

    let [description, setDescription] = useState('');
    let [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction= {
            id: Math.floor(Math.random() * 1000000),
            description,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor='description'>
                        Description
                    </label><br/>
                    <input type="text" id="description" placeholder="Detail Of Transaction" 
                            value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount (Use negative sign for expenses)
                    </label><br/>
                    <input type="number" step="0.01" required id="transactionamount" placeholder="Transaction Amount" 
                        value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;