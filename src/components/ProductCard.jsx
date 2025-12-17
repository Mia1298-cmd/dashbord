import React from 'react';

const ProductCard = ({ product, onEdit, onDelete }) => {
    return (
        <div className="product-card">
            <img
                src={product.image || 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop'}
                alt={product.name}
                className="product-image"
            />

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-farm">{product.farm}</p>
                <p className="product-price">price :{product.price}Da/{product.unit}</p>
            </div>

            <div className="product-actions">
                <button className="btn-edit" onClick={() => onEdit(product)}>
                    Edit
                </button>
                <button className="btn-delete" onClick={() => onDelete(product.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
