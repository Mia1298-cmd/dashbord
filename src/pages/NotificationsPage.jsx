import React, { useState } from 'react';

const NotificationsPage = ({ notifications }) => {
    const [activeTab, setActiveTab] = useState('orders');

    const orderNotifications = notifications.filter(n => n.type === 'order');
    const productNotifications = notifications.filter(n => n.type === 'product');

    return (
        <div className="notifications-page">
            <h1 className="notifications-title">Notifications</h1>

            <div className="notifications-tabs">
                <button
                    className={`notification-tab ${activeTab === 'orders' ? 'active' : ''}`}
                    onClick={() => setActiveTab('orders')}
                >
                    orders
                </button>
                <button
                    className={`notification-tab ${activeTab === 'my-notifications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('my-notifications')}
                >
                    my notifications
                </button>
            </div>

            <div className="notification-list">
                {activeTab === 'orders' ? (
                    orderNotifications.length > 0 ? (
                        orderNotifications.map((notification, index) => (
                            <div key={index} className="notification-card">
                                <div className="notification-header">
                                    <img
                                        src={notification.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'}
                                        alt={notification.userName}
                                        className="notification-avatar"
                                    />
                                    <div className="notification-user-info">
                                        <h4>{notification.userName}</h4>
                                        <p>{notification.userEmail}</p>
                                    </div>
                                </div>
                                <p className="notification-message">{notification.message}</p>
                            </div>
                        ))
                    ) : (
                        <p style={{ color: '#888', textAlign: 'center', padding: '40px' }}>
                            No order notifications yet.
                        </p>
                    )
                ) : (
                    productNotifications.length > 0 ? (
                        productNotifications.map((notification, index) => (
                            <div key={index} className="notification-simple">
                                {notification.message}
                            </div>
                        ))
                    ) : (
                        <p style={{ color: '#888', textAlign: 'center', padding: '40px' }}>
                            No notifications yet.
                        </p>
                    )
                )}
            </div>
        </div>
    );
};

export default NotificationsPage;
