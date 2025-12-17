import React from 'react';

const Header = ({ user, onNotificationClick }) => {
    return (
        <header className="header">
            <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=300&fit=crop"
                alt="Farm Banner"
                className="header-banner"
            />

            <div className="header-profile">
                <img
                    src={user.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'}
                    alt={user.name}
                    className="header-avatar"
                />

                <div className="header-info">
                    <h1 className="header-name">{user.name}</h1>
                    <p className="header-email">{user.email}</p>
                </div>

                <div className="header-actions">
                    <button className="btn-landing">landing page</button>
                    <button className="btn-icon notification-bell" onClick={onNotificationClick}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="welcome-message">
                <h2>Welcome back, {user.name.split(' ')[0]}! <span>🌿</span></h2>
                <p>We're glad to see {user.farmName || 'your_farm'} thriving on your dashboard. Check your products, orders, and inventory to stay up to date with your farm.</p>
            </div>
        </header>
    );
};

export default Header;
