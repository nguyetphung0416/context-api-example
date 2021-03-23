import React, { memo, useCallback, useMemo, useState } from 'react';
import NavBar from './NavBar';
import ItemList from './ItemList';
import MyContext from './Context';

const colors = {
    red: 'red',
    blue: 'blue',
}

const App = () => {
    const [quantity, setQuantity] = useState(0);
    const handleUpdateCart = useCallback((e) => {
        console.log('update', quantity, e);
        setQuantity(e);
    }, []);

    return (
        <MyContext.Provider value={{
            quantity: quantity,
            updateCart: (e) => handleUpdateCart(e)
        }}>
            <NavBar />
            <ItemList />
        </MyContext.Provider>
    );
}

export default memo(App);
