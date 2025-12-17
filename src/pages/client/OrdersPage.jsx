import React, { useState } from 'react';
import OrderCard from '../../components/OrderCard';

const OrdersPage = ({ orders }) => {
    const [activeTab, setActiveTab] = useState('active');

    const activeOrders = orders.filter(o => o.status === 'pending' || o.status === 'shipped');
    const completedOrders = orders.filter(o => o.status === 'delivered' || o.status === 'cancelled');

    return (
        <div className="orders-page">
            <h1 className="orders-title">My Orders</h1>

            <div className="orders-tabs">
                <button
                    className={`order-tab ${activeTab === 'active' ? 'active' : ''}`}
                    onClick={() => setActiveTab('active')}
                >
                    Active Orders
                    {activeOrders.length > 0 && (
                        <span className="tab-badge">{activeOrders.length}</span>
                    )}
                </button>
                <button
                    className={`order-tab ${activeTab === 'history' ? 'active' : ''}`}
                    onClick={() => setActiveTab('history')}
                >
                    Order History
                </button>
            </div>

            <div className="orders-list">
                {activeTab === 'active' ? (
                    activeOrders.length > 0 ? (
                        activeOrders.map(order => (
                            <OrderCard key={order.id} order={order} />
                        ))
                    ) : (
                        <div className="empty-orders">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="60" height="60">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14,2 14,8 20,8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                            <h3>No active orders</h3>
                            <p>You don't have any orders in progress.</p>
                        </div>
                    )
                ) : (
                    completedOrders.length > 0 ? (
                        completedOrders.map(order => (
                            <OrderCard key={order.id} order={order} />
                        ))
                    ) : (
                        <div className="empty-orders">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="60" height="60">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14,2 14,8 20,8" />
                            </svg>
                            <h3>No order history</h3>
                            <p>Your completed orders will appear here.</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default OrdersPage;
