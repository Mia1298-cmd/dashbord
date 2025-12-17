import React, { useState } from 'react';
import ClientSidebar from './components/ClientSidebar';
import ClientProfilePage from './pages/client/ClientProfilePage';
import ShopPage from './pages/client/ShopPage';
import CartPage from './pages/client/CartPage';
import OrdersPage from './pages/client/OrdersPage';
import ClientNotificationsPage from './pages/client/ClientNotificationsPage';
import './index.css';

function ClientApp() {
    const [activePage, setActivePage] = useState('shop');

    const [user, setUser] = useState({
        name: 'Sarah Ahmed',
        email: 'sarah_ahmed@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    });

    const [products] = useState([
        {
            id: 1,
            name: 'zit zitoun',
            farm: 'tizi_wezou_farm',
            price: 7000,
            unit: 'Liter',
            category: 'Oils',
            image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop'
        },
        {
            id: 2,
            name: 'Asel_nature',
            farm: 'tizi_wezou_farm',
            price: 6000,
            unit: 'jar',
            category: 'Honey',
            image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=200&fit=crop'
        },
        {
            id: 3,
            name: 'moudarine',
            farm: 'tizi_wezou_farm',
            price: 150,
            unit: 'Kg',
            category: 'Fruits',
            image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=200&fit=crop'
        },
        {
            id: 4,
            name: 'Lben frais',
            farm: 'oran_dairy_farm',
            price: 200,
            unit: 'Liter',
            category: 'Dairy',
            image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop'
        },
        {
            id: 5,
            name: 'Tomates bio',
            farm: 'blida_organic',
            price: 120,
            unit: 'Kg',
            category: 'Vegetables',
            image: 'https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=300&h=200&fit=crop'
        },
        {
            id: 6,
            name: 'Pommes rouges',
            farm: 'djurdjura_farm',
            price: 250,
            unit: 'Kg',
            category: 'Fruits',
            image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop'
        }
    ]);

    const [cartItems, setCartItems] = useState([]);

    const [orders] = useState([
        {
            id: 'ORD-001',
            date: '15/12/2025',
            status: 'shipped',
            total: 13500,
            items: [
                { name: 'zit zitoun', quantity: 1, price: 7000, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=60&h=60&fit=crop' },
                { name: 'Asel_nature', quantity: 1, price: 6000, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=60&h=60&fit=crop' }
            ]
        },
        {
            id: 'ORD-002',
            date: '10/12/2025',
            status: 'delivered',
            total: 450,
            items: [
                { name: 'moudarine', quantity: 3, price: 150, image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=60&h=60&fit=crop' }
            ]
        },
        {
            id: 'ORD-003',
            date: '16/12/2025',
            status: 'pending',
            total: 7200,
            items: [
                { name: 'Lben frais', quantity: 1, price: 200, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=60&h=60&fit=crop' },
                { name: 'zit zitoun', quantity: 1, price: 7000, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=60&h=60&fit=crop' }
            ]
        }
    ]);

    const [notifications] = useState([
        {
            type: 'order',
            status: 'shipped',
            title: 'Order Shipped',
            message: 'Your order #ORD-001 has been shipped and is on its way!',
            time: '2 hours ago'
        },
        {
            type: 'order',
            status: 'delivered',
            title: 'Order Delivered',
            message: 'Your order #ORD-002 has been delivered successfully.',
            time: '2 days ago'
        },
        {
            type: 'promotion',
            title: '20% Off Honey!',
            message: 'Get 20% off on all honey products this week. Use code: HONEY20',
            time: '1 day ago'
        },
        {
            type: 'promotion',
            title: 'New Farm Added',
            message: 'Check out products from Djurdjura Farm - fresh apples and more!',
            time: '3 days ago'
        }
    ]);

    const handleAddToCart = (product, quantity) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const handleUpdateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prev =>
            prev.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const handleRemoveItem = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    const handleCheckout = () => {
        alert('Checkout successful! Your order has been placed.');
        setCartItems([]);
        setActivePage('orders');
    };

    const handleUserUpdate = (updatedUser) => {
        setUser(updatedUser);
    };

    const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const renderPage = () => {
        switch (activePage) {
            case 'profile':
                return (
                    <ClientProfilePage
                        user={user}
                        onUserUpdate={handleUserUpdate}
                        onCartClick={() => setActivePage('cart')}
                    />
                );
            case 'shop':
                return (
                    <ShopPage
                        products={products}
                        onAddToCart={handleAddToCart}
                    />
                );
            case 'cart':
                return (
                    <CartPage
                        cartItems={cartItems}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemoveItem={handleRemoveItem}
                        onCheckout={handleCheckout}
                    />
                );
            case 'orders':
                return <OrdersPage orders={orders} />;
            case 'notifications':
                return <ClientNotificationsPage notifications={notifications} />;
            default:
                return <ShopPage products={products} onAddToCart={handleAddToCart} />;
        }
    };

    return (
        <div className="app-container">
            <ClientSidebar
                activePage={activePage}
                onPageChange={setActivePage}
                cartItemCount={cartItemCount}
            />
            <main className="main-content">
                {renderPage()}
            </main>
        </div>
    );
}

export default ClientApp;
