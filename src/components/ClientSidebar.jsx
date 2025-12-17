import React from 'react';
import logo from '../assets/images/logo.png';

const ClientSidebar = ({ activePage, onPageChange, cartItemCount = 0 }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="FELLAH" />
            </div>

            <nav className="sidebar-nav">
                <button
                    className={`sidebar-nav-item ${activePage === 'profile' ? 'active' : ''}`}
                    onClick={() => onPageChange('profile')}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    Profile
                </button>

                <button
                    className={`sidebar-nav-item ${activePage === 'shop' ? 'active' : ''}`}
                    onClick={() => onPageChange('shop')}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    Shop
                </button>

                <button
                    className={`sidebar-nav-item ${activePage === 'cart' ? 'active' : ''}`}
                    onClick={() => onPageChange('cart')}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Cart
                    {cartItemCount > 0 && (
                        <span className="cart-badge">{cartItemCount}</span>
                    )}
                </button>

                <button
                    className={`sidebar-nav-item ${activePage === 'orders' ? 'active' : ''}`}
                    onClick={() => onPageChange('orders')}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14,2 14,8 20,8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10,9 9,9 8,9" />
                    </svg>
                    Orders
                </button>

                <button
                    className={`sidebar-nav-item ${activePage === 'notifications' ? 'active' : ''}`}
                    onClick={() => onPageChange('notifications')}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    Notifications
                </button>
            </nav>

            <div className="sidebar-logout">
                <button>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16,17 21,12 16,7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    log out
                </button>
            </div>
        </aside>
    );
};

export default ClientSidebar;
