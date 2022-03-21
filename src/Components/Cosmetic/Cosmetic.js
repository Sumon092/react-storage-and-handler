import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    console.log(props);
    const { name, price, id } = props.cosmetic;
    const addToCart = () => {
        // console.log('cart added', id)
        // localStorage.setItem(id, 1);
        addToDb(id);
    }

    // const addToCartWithParam = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy this {name}</h2>
            <p><small>Product Id :{id}</small></p>
            <p>For only $ {price}</p>
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
            {/* <h2>Buy this {props.cosmetic.name}</h2>
            <p>For only $ {props.cosmetic.price}</p> */}
        </div>
    );
};

export default Cosmetic;