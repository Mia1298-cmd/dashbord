import React, { useState } from 'react';

const ClientNotificationsPage = ({ notifications }) => {
    const [activeTab, setActiveTab] = useState('orders');

    const orderNotifications = notifications.filter(n => n.type === 'order');
    const promotionNotifications = notifications.filter(n => n.type === 'promotion');

    return (
        <div className="notifications-page">
            <h1 className="notifications-title">Notifications</h1>

            <div className="notifications-tabs">
                <button
                    className={`notification-tab ${activeTab === 'orders' ? 'active' : ''}`}
                    onClick={() => setActiveTab('orders')}
                >
                    Order Updates
                </button>
                <button
                    className={`notification-tab ${activeTab === 'promotions' ? 'active' : ''}`}
                    onClick={() => setActiveTab('promotions')}
                >
                    Promotions
                </button>
            </div>

            <div className="notification-list">
                {activeTab === 'orders' ? (
                    orderNotifications.length > 0 ? (
                        orderNotifications.map((notification, index) => (
                            <div key={index} className="notification-card">
                                <div className="notification-icon-wrapper" style={{ backgroundColor: getStatusColor(notification.status) }}>
                                    {getStatusIcon(notification.status)}
                                </div>
                                <div className="notification-content">
                                    <h4>{notification.title}</h4>
                                    <p className="notification-message">{notification.message}</p>
                                    <span className="notification-time">{notification.time}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ color: '#888', textAlign: 'center', padding: '40px' }}>
                            No order notifications yet.
                        </p>
                    )
                ) : (
                    promotionNotifications.length > 0 ? (
                        promotionNotifications.map((notification, index) => (
                            <div key={index} className="notification-promo">
                                <div className="promo-badge">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
                                    </svg>
                                </div>
                                <div className="notification-content">
                                    <h4>{notification.title}</h4>
                                    <p className="notification-message">{notification.message}</p>
                                    <span className="notification-time">{notification.time}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ color: '#888', textAlign: 'center', padding: '40px' }}>
                            No promotions yet.
                        </p>
                    )
                )}
            </div>
        </div>
    );
};

const getStatusColor = (status) => {
    switch (status) {
        case 'delivered': return '#27ae60';
        case 'shipped': return '#3498db';
        case 'pending': return '#f39c12';
        default: return '#3D7A7A';
    }
};

const getStatusIcon = (status) => {
    switch (status) {
        case 'delivered':
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="18" height="18">
                    <polyline points="20,6 9,17 4,12" />
                </svg>
            );
        case 'shipped':
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="18" height="18">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16,8 20,8 23,11 23,16 16,16 16,8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
            );
        case 'pending':
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="18" height="18">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="18" height="18">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
            );
    }
};

export default ClientNotificationsPage;
