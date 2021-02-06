import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext),

          amounts = transactions.map(transaction => transaction.amount),
          total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Balanță</h4>
            <h1 className="balance">{total} RON</h1>
        </>
    )
}
