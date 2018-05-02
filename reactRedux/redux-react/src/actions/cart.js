// src/actions/cart.js
export const addToCart = (item) => {

    return {
        type: 'add',
        item : item
    };
}