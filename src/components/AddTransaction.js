import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState(''),
          [amount, setAmount] = useState(0);

          const { addTransaction } = useContext(GlobalContext);

          const onSubmit = e => {
              e.preventDefault();

              const newTransaction = {
                  id: Math.floor(Math.random() * 100000000),
                  text,
                  amount: +amount
              }

              addTransaction(newTransaction);
          }

    return (
        <>
            <h3>Adaugă o tranzacție</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Nume</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
                           placeholder="Introdu numele tranzacției" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Sumă <br />
                    (negativ - cheltuială, pozitiv - venit)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                           placeholder="Introdu suma" />
                </div>
            <button className="btn">Adaugă tranzacția</button>
            </form>
        </>
    )
}
