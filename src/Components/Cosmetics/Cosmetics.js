import React from 'react';
import { add } from '../../utilities/caculate';
// import add from '../../utilities/caculata';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);
    return (
        <div>
            <h2>Welcome to cosmetics store</h2>
            <h3>Total Price : {total}</h3>
        </div>
    );
};

export default Cosmetics;