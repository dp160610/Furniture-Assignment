import React from 'react'
import CartItem from '../CartItem/CartItem'

const CartDropdown = ({ cartItems, toggleHidden }) => (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message"> Your cart is empty </span>
        )}
      </div>
      <button
        onClick={() => {
  
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </button>
    </div>
  );

  export default CartDropdown;