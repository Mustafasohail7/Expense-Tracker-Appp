import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Summary from './components/Summary';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalContext';

function App() {

  return (
    <div>
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance />
        <Summary />
        <TransactionHistory/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
    </div>
  )
}

export default App;
