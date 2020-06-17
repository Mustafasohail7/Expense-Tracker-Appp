import React, { useState } from 'react';

function AddTransaction() {

    let [description, setDescription] = useState();
    let [amount, setAmount] = useState();

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
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
                    <input type="number" id="transactionamount" placeholder="Transaction Amount" 
                        value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;