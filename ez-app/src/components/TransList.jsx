import React, { useContext } from 'react';
import { GlobalContext } from '../context/State';

const TransList = () => {

    const { transactions } = useContext(GlobalContext);

    const renderTrans = transactions.map(trans => (
        <li className="minus">
          {trans.text} <span>-$400</span><button className="delete-btn">x</button>
        </li>
    ))
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {renderTrans}
            </ul>
        </div>
    );
};

export default TransList;