import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import Transactions from './Transactions';

function TransactionHistory() {

    const {transactions} = useContext(GlobalContext);
 
    return(
        <div className="money">
            <h3>Transaction History</h3>
            <ul className="list">
            {transactions.map ( transaction => (
               <Transactions key={transaction.id} transaction={transaction} />
            )
            )}
            </ul> 
        </div>
    )
}

export default TransactionHistory;

/*<Transactions key={transactions.id} transaction={transactions} />*/