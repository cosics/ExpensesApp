import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext),

          amounts = transactions.map(transaction => transaction.amount),
  
          income = amounts
                    .filter(item => item > 0)
                    .reduce((acc, item) => (acc += item), 0)
                    .toFixed(2),
  
          expense = (
                    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
                    -1
                    ).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
            <h4>Venit</h4>
            <p className="money plus">{income}</p>
            </div>
            <div>
            <h4>Cheltuieli</h4>
            <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}
