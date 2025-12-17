import React from 'react';

const OrderCard = ({ order }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'delivered': return '#27ae60';
            case 'shipped': return '#3498db';
            case 'pending': return '#f39c12';
            case 'cancelled': return '#e74c3c';
            default: return '#888';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'delivered':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <polyline points="20,6 9,17 4,12" />
                    </svg>
                );
            case 'shipped':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16,8 20,8 23,11 23,16 16,16 16,8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                );
            case 'pending':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="order-card">
            <div className="order-header">
                <div className="order-info">
                    <h4 className="order-id">Order #{order.id}</h4>
                    <p className="order-date">{order.date}</p>
                </div>
                <div
                    className="order-status"
                    style={{ backgroundColor: getStatusColor(order.status) }}
                >
                    {getStatusIcon(order.status)}
                    <span>{order.status}</span>
                </div>
            </div>

            <div className="order-items">
                {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                        <img
                            src={item.image || 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=60&h=60&fit=crop'}
                            alt={item.name}
                            className="order-item-image"
                        />
                        <div className="order-item-info">
                            <span className="order-item-name">{item.name}</span>
                            <span className="order-item-qty">x{item.quantity}</span>
                        </div>
                        <span className="order-item-price">{(item.price * item.quantity).toLocaleString()}Da</span>
                    </div>
                ))}
            </div>

            <div className="order-footer">
                <span className="order-total-label">Total:</span>
                <span className="order-total-amount">{order.total.toLocaleString()}Da</span>
            </div>
        </div>
    );
};

export default OrderCard;
