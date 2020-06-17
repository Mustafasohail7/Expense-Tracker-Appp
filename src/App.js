import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Summary from './components/Summary';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalContext';

function App() {
  let Income = 500;
  let Expenses = 400;
  let balance = Income - Expenses;
  return (
    <div align='center'>
    <GlobalProvider>
      <Header/>
      <div>
        <Balance value={balance}/>
        <Summary inc={Income} exp={Expenses}/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
    </div>
  )
}

export default App;
