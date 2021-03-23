import React, { memo, useContext, useState } from 'react';
import MyContext from './../Context';

const NavBar = () => {
    const [quantity, setQuantity] = useState(0);
    const cart = useContext(MyContext);
    console.log("nav bar", cart);
    const styles = {
        quantity: {
            color: 'red',
            fontSize: '20px'
        }
    };

    return (
        <>
            Quantity item in cart
            <span style={styles.quantity}> {cart.quantity}</span>
        </>
    )
};

export default memo(NavBar);