import React, { useState } from 'react';

const ShopProductCard = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleAddToCart = () => {
        onAddToCart(product, quantity);
        setQuantity(1);
    };

    return (
        <div className="product-card shop-product-card">
            <img
                src={product.image || 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop'}
                alt={product.name}
                className="product-image"
            />

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-farm">{product.farm}</p>
                <p className="product-price">price: {product.price}Da/{product.unit}</p>
            </div>

            <div className="shop-product-actions">
                <div className="quantity-selector">
                    <button
                        className="qty-btn"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                    >
                        −
                    </button>
                    <span className="qty-value">{quantity}</span>
                    <button
                        className="qty-btn"
                        onClick={() => handleQuantityChange(1)}
                    >
                        +
                    </button>
                </div>
                <button className="btn-add-cart" onClick={handleAddToCart}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ShopProductCard;
