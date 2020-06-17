import React from 'react';

function TransactionHistory() {
    return(
        <div className="money">
            <h3>TransactionHistory</h3>
            <ul className="list">
                <li className="plus">
                    Sonic
                    <span>$800</span>
                    <button className="btn">X</button>
                </li>
                <li className="minus">
                    Doraemon
                    <span>-$500</span>
                    <button className="btn">X</button>
                </li>
            </ul>
        </div>
    )
}

export default TransactionHistory;