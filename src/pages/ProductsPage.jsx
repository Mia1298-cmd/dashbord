import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterButtons from '../components/FilterButtons';
import ProductModal from '../components/ProductModal';

const ProductsPage = ({ products, onAddProduct, onEditProduct, onDeleteProduct, onAddNotification }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const categories = ['All', 'Fruits', 'Oils', 'Dairy', 'Vegetables', 'Honey'];

    const filteredProducts = activeFilter === 'All'
        ? products
        : products.filter(p => p.category === activeFilter);

    const handleAddClick = () => {
        setEditingProduct(null);
        setShowModal(true);
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
        setShowModal(true);
    };

    const handleSave = (productData) => {
        if (editingProduct) {
            onEditProduct(productData);
        } else {
            onAddProduct(productData);
            onAddNotification({
                type: 'product',
                message: 'new procduct added to the list of proucts successfully!!'
            });
        }
        setShowModal(false);
        setEditingProduct(null);
    };

    const handleDelete = (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            onDeleteProduct(productId);
        }
    };

    return (
        <div>
            <div className="products-header">
                <h1 className="products-title">Manage your products</h1>
                <button className="btn-icon notification-bell">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px' }}>
                <FilterButtons
                    categories={categories}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />
                <button className="btn-add-product" onClick={handleAddClick}>
                    Add Product
                </button>
            </div>

            <div className="products-grid">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onEdit={handleEditClick}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            {showModal && (
                <ProductModal
                    product={editingProduct}
                    onSave={handleSave}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default ProductsPage;
