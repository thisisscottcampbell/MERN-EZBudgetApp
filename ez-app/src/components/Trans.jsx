import React from 'react';

const Trans = ({ trans }) => {
    return (
        <div>
            <li className="minus">
                {trans.text} <span>-$400</span><button className="delete-btn">x</button>
            </li>
        </div>
    );
};

export default Trans;