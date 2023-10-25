import React from 'react';

const CartItem = ({ id, name, img, category, description, price, stock, removeItem }) => {
return (
    <div className="cart-item">
        <img src={img} alt={name} className="cart-item-img" />
        <div className="cart-item-details">
            <h3>{name}</h3>
            <p>Categoría: {category}</p>
            <p>Descripción: {description}</p>
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
        </div>
        <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
    );
};

export default CartItem;
