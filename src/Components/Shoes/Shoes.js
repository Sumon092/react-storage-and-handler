import React from 'react';
import { add, multiply } from '../../utilities/caculate';

const Shoes = () => {
    const first = 22;
    const second = 11;
    const total = multiply(first, second);
    const sum = add(first, second);

    return (
        <div>
            <h2>Shoes component </h2>
            <h3>Product are : {total} and addition are {sum}</h3>
        </div>
    );
};

export default Shoes;