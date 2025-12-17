import React from 'react';
import CartItem from '../../components/CartItem';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = cartItems.length > 0 ? 500 : 0;
    const total = subtotal + deliveryFee;

    return (
        <div className="cart-page">
            <h1 className="cart-title">Shopping Cart</h1>

            {cartItems.length > 0 ? (
                <div className="cart-container">
                    <div className="cart-items-section">
                        <div className="cart-items-header">
                            <span>Product</span>
                            <span>Details</span>
                            <span>Quantity</span>
                            <span>Total</span>
                            <span></span>
                        </div>
                        <div className="cart-items-list">
                            {cartItems.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onUpdateQuantity={onUpdateQuantity}
                                    onRemove={onRemoveItem}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="cart-summary">
                        <h3 className="summary-title">Order Summary</h3>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>{subtotal.toLocaleString()}Da</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery Fee</span>
                            <span>{deliveryFee.toLocaleString()}Da</span>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-row summary-total">
                            <span>Total</span>
                            <span>{total.toLocaleString()}Da</span>
                        </div>

                        <button className="btn-checkout" onClick={onCheckout}>
                            Proceed to Checkout
                        </button>

                        <p className="cart-note">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                            Delivery within 2-3 business days
                        </p>
                    </div>
                </div>
            ) : (
                <div className="empty-cart">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="80" height="80">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <h3>Your cart is empty</h3>
                    <p>Start shopping to add products to your cart!</p>
                </div>
            )}
        </div>
    );
};

export default CartPage;
