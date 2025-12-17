import React from 'react';
import logo from '../assets/images/logo.png';

const Sidebar = ({ activePage, onPageChange }) => {
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
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9,22 9,12 15,12 15,22" />
                    </svg>
                    Profile
                </button>

                <button
                    className={`sidebar-nav-item ${activePage === 'products' ? 'active' : ''}`}
                    onClick={() => onPageChange('products')}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    my Products
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

export default Sidebar;
