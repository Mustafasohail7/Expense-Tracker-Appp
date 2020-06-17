import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = [
    {id: 1, description:"Income 1", amount:1000},
    {id: 2, description:"Expense 1", amount:-400}
]


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={ {transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )
}