import React from 'react';
import { multiply } from '../../utilities/caculate';

const Shoes = () => {
    const first = 22;
    const second = 11;
    const total = multiply(first, second)

    return (
        <div>
            <h2>Shoes component </h2>
            <h3>Shoes are : {total}</h3>
        </div>
    );
};

export default Shoes;