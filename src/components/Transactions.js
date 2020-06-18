import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';

function Transactions({transaction}) {
    const sign = transaction.amount<0 ? '-': '+';
    const { deleteTransaction } = useContext(GlobalContext);

    return(
        <li className={sign==='-'? 'minus': 'plus'}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn"
        onClick={ () => deleteTransaction(transaction.id)}>X</button>
        </li>
    )
}

export default Transactions;