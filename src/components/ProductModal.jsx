import React, { useState, useEffect } from 'react';
import UploadBox from './UploadBox';

const ProductModal = ({ product, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        harvestDate: '',
        unit: 'Kg',
        category: 'Fruits',
        freshness: 'Fresh',
        description: '',
        image: ''
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || '',
                price: product.price || '',
                harvestDate: product.harvestDate || '',
                unit: product.unit || 'Kg',
                category: product.category || 'Fruits',
                freshness: product.freshness || 'Fresh',
                description: product.description || '',
                image: product.image || ''
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (imageData) => {
        setFormData(prev => ({ ...prev, image: imageData }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...formData,
            id: product?.id || Date.now(),
            farm: 'tizi_wezou_farm'
        });
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <div className="modal-body">
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <UploadBox
                            title="Upload product photo"
                            preview={formData.image}
                            onUpload={handleImageUpload}
                        />

                        <div className="form-group" style={{ marginTop: '25px' }}>
                            <label className="form-label">Product name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">product price</label>
                            <input
                                type="number"
                                name="price"
                                className="form-input"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">harvest date</label>
                            <input
                                type="date"
                                name="harvestDate"
                                className="form-input"
                                value={formData.harvestDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Unit of sale</label>
                            <div className="radio-group">
                                {['Kg', 'liter', 'jar'].map(unit => (
                                    <label key={unit} className="radio-item">
                                        <input
                                            type="radio"
                                            name="unit"
                                            value={unit}
                                            checked={formData.unit === unit}
                                            onChange={handleChange}
                                        />
                                        {unit}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Product Category</label>
                            <div className="radio-group">
                                {['Fruits', 'Oils', 'Honey', 'Vegetables', 'Dairy'].map(cat => (
                                    <label key={cat} className="radio-item">
                                        <input
                                            type="radio"
                                            name="category"
                                            value={cat}
                                            checked={formData.category === cat}
                                            onChange={handleChange}
                                        />
                                        {cat}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Product Category</label>
                            <div className="radio-group">
                                {['Fresh', 'not fresh'].map(status => (
                                    <label key={status} className="radio-item">
                                        <input
                                            type="radio"
                                            name="freshness"
                                            value={status}
                                            checked={formData.freshness === status}
                                            onChange={handleChange}
                                        />
                                        {status}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Descreption</label>
                            <textarea
                                name="description"
                                className="form-input"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                            />
                        </div>

                        <button type="submit" className="btn-done">done</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
