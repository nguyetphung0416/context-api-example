import React, { memo, useContext } from 'react';
import MyContext from "./../Context";

const Item = (props) => {
    const { info: { name, price } } = props;
    const cart = useContext(MyContext);
    console.log("context item", cart);
    const handleIncrement = () => {
        cart.updateCart(cart.quantity + 1);
    };
    const handleDecrement = () => {
        if (cart.quantity > 1) {
            cart.updateCart(cart.quantity - 1);
        }
    };

    return (
        <>
            <h3>{name}</h3>
            <div>{price}</div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </>
    )
};

export default memo(Item);