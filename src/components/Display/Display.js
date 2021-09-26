import React from 'react';
import './Display.css';

const Display = (props) => {
    const { info } = props;
    let total = 0;
    for (const product of info) {
        total = total + product.balance;
    }
    return (
        <div>
            <h3>Authors added: {props.info.length}</h3>
            <h3>Total Net Worth: ${total}M</h3>
        </div>
    );
};

export default Display;