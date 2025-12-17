import React, { useState } from 'react';
import ClientHeader from '../../components/ClientHeader';
import UploadBox from '../../components/UploadBox';

const ClientProfilePage = ({ user, onUserUpdate, onCartClick }) => {
    const [activeTab, setActiveTab] = useState('profile');

    const [profileData, setProfileData] = useState({
        name: user.name,
        email: user.email,
        password: '',
        avatar: user.avatar
    });

    const [addressData, setAddressData] = useState({
        fullName: user.name,
        phone: '',
        address: '',
        city: '',
        wilaya: '',
        postalCode: ''
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressData(prev => ({ ...prev, [name]: value }));
    };

    const handleProfilePhotoUpload = (imageData) => {
        setProfileData(prev => ({ ...prev, avatar: imageData }));
        onUserUpdate({ ...user, avatar: imageData });
    };

    const handleSaveProfile = () => {
        onUserUpdate({ ...user, name: profileData.name, email: profileData.email, avatar: profileData.avatar });
        alert('Profile updated successfully!');
    };

    const handleSaveAddress = () => {
        alert('Delivery address saved successfully!');
    };

    return (
        <div>
            <ClientHeader user={{ ...user, avatar: profileData.avatar }} onCartClick={onCartClick} />

            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                >
                    Profile Settings
                </button>
                <button
                    className={`tab ${activeTab === 'address' ? 'active' : ''}`}
                    onClick={() => setActiveTab('address')}
                >
                    Delivery Address
                </button>
            </div>

            {activeTab === 'profile' ? (
                <div className="form-section">
                    <h2 className="form-label" style={{ fontSize: '18px', marginBottom: '20px' }}>
                        Change Profile Picture
                    </h2>

                    <UploadBox
                        title="Upload profile photo"
                        preview={profileData.avatar}
                        onUpload={handleProfilePhotoUpload}
                    />

                    <div className="form-group" style={{ marginTop: '30px' }}>
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-input"
                            value={profileData.name}
                            onChange={handleProfileChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            value={profileData.email}
                            onChange={handleProfileChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            value={profileData.password}
                            onChange={handleProfileChange}
                            placeholder="Enter new password"
                        />
                    </div>

                    <button className="btn-save" onClick={handleSaveProfile}>
                        Save Changes
                    </button>
                </div>
            ) : (
                <div className="form-section">
                    <h2 className="form-label" style={{ fontSize: '18px', marginBottom: '20px' }}>
                        Delivery Information
                    </h2>

                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            className="form-input"
                            value={addressData.fullName}
                            onChange={handleAddressChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-input"
                            value={addressData.phone}
                            onChange={handleAddressChange}
                            placeholder="+213 XXX XXX XXX"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            name="address"
                            className="form-input"
                            value={addressData.address}
                            onChange={handleAddressChange}
                            placeholder="Street address, apartment, etc."
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group" style={{ flex: 1 }}>
                            <label className="form-label">City</label>
                            <input
                                type="text"
                                name="city"
                                className="form-input"
                                value={addressData.city}
                                onChange={handleAddressChange}
                            />
                        </div>

                        <div className="form-group" style={{ flex: 1 }}>
                            <label className="form-label">Wilaya</label>
                            <input
                                type="text"
                                name="wilaya"
                                className="form-input"
                                value={addressData.wilaya}
                                onChange={handleAddressChange}
                            />
                        </div>

                        <div className="form-group" style={{ flex: 0.5 }}>
                            <label className="form-label">Postal Code</label>
                            <input
                                type="text"
                                name="postalCode"
                                className="form-input"
                                value={addressData.postalCode}
                                onChange={handleAddressChange}
                            />
                        </div>
                    </div>

                    <button className="btn-save" onClick={handleSaveAddress}>
                        Save Address
                    </button>
                </div>
            )}
        </div>
    );
};

export default ClientProfilePage;
