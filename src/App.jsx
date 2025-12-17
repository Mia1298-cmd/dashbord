import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProfilePage from './pages/ProfilePage';
import ProductsPage from './pages/ProductsPage';
import NotificationsPage from './pages/NotificationsPage';
import './index.css';

function App() {
  const [activePage, setActivePage] = useState('profile');

  const [user, setUser] = useState({
    name: 'taher miloudi',
    email: 'taher_miloudi@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    farmName: 'tizi_wezou_farm'
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'zit zitoun',
      farm: 'tizi_wezou_farm',
      price: '7000',
      unit: 'Liter',
      category: 'Oils',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Asel_nature',
      farm: 'tizi_wezou_farm',
      price: '6000',
      unit: 'jar',
      category: 'Honey',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'moudarine',
      farm: 'tizi_wezou_farm',
      price: '150',
      unit: 'Kg',
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'zit zitoun',
      farm: 'tizi_wezou_farm',
      price: '7000',
      unit: 'Liter',
      category: 'Oils',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'Asel_nature',
      farm: 'tizi_wezou_farm',
      price: '6000',
      unit: 'jar',
      category: 'Honey',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=200&fit=crop'
    },
    {
      id: 6,
      name: 'moudarine',
      farm: 'tizi_wezou_farm',
      price: '150',
      unit: 'Kg',
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=200&fit=crop'
    }
  ]);

  const [notifications, setNotifications] = useState([
    {
      type: 'order',
      userName: 'chaker zinedine',
      userEmail: 'mohamed_gouni@gmail.com',
      message: 'New order received: Chaker Zinedine ordered 5 bottles of olive oil date:12/12/2025',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      type: 'order',
      userName: 'chaker zinedine',
      userEmail: 'mohamed_gouni@gmail.com',
      message: 'New order received: Chaker Zinedine ordered 5 bottles of olive oil date:12/12/2025',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      type: 'order',
      userName: 'chaker zinedine',
      userEmail: 'mohamed_gouni@gmail.com',
      message: 'New order received: Chaker Zinedine ordered 5 bottles of olive oil date:12/12/2025',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      type: 'order',
      userName: 'chaker zinedine',
      userEmail: 'mohamed_gouni@gmail.com',
      message: 'New order received: Chaker Zinedine ordered 5 bottles of olive oil date:12/12/2025',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      type: 'product',
      message: 'new procduct added to the list of proucts successfully!!'
    },
    {
      type: 'product',
      message: 'new procduct added to the list of proucts successfully!!'
    },
    {
      type: 'product',
      message: 'new procduct added to the list of proucts successfully!!'
    }
  ]);

  const handleAddProduct = (product) => {
    setProducts(prev => [...prev, product]);
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts(prev =>
      prev.map(p => p.id === updatedProduct.id ? updatedProduct : p)
    );
  };

  const handleDeleteProduct = (productId) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleAddNotification = (notification) => {
    setNotifications(prev => [notification, ...prev]);
  };

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'profile':
        return (
          <ProfilePage
            user={user}
            onUserUpdate={handleUserUpdate}
          />
        );
      case 'products':
        return (
          <ProductsPage
            products={products}
            onAddProduct={handleAddProduct}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
            onAddNotification={handleAddNotification}
          />
        );
      case 'notifications':
        return <NotificationsPage notifications={notifications} />;
      default:
        return <ProfilePage user={user} onUserUpdate={handleUserUpdate} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
