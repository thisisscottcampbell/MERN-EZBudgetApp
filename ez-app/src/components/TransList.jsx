import React, { useContext } from 'react';
import Trans from './Trans'
import { GlobalContext } from '../context/State';

const TransList = () => {

    const { transactions } = useContext(GlobalContext);

    const renderTrans = transactions.map(trans => <Trans key={trans.id} trans={trans} />)

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {renderTrans}
            </ul>
        </div>
    );
};

export default TransList;