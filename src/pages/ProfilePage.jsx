import React, { useState } from 'react';
import Header from '../components/Header';
import UploadBox from '../components/UploadBox';

const ProfilePage = ({ user, onUserUpdate }) => {
    const [activeTab, setActiveTab] = useState('profile');

    const [profileData, setProfileData] = useState({
        name: user.name,
        email: user.email,
        password: '',
        avatar: user.avatar
    });

    const [farmData, setFarmData] = useState({
        farmName: user.farmName || '',
        location: '',
        phone: '',
        description: '',
        farmPhoto: '',
        productTypes: []
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handleFarmChange = (e) => {
        const { name, value } = e.target;
        setFarmData(prev => ({ ...prev, [name]: value }));
    };

    const handleProductTypeChange = (type) => {
        setFarmData(prev => ({
            ...prev,
            productTypes: prev.productTypes.includes(type)
                ? prev.productTypes.filter(t => t !== type)
                : [...prev.productTypes, type]
        }));
    };

    const handleProfilePhotoUpload = (imageData) => {
        setProfileData(prev => ({ ...prev, avatar: imageData }));
        onUserUpdate({ ...user, avatar: imageData });
    };

    const handleFarmPhotoUpload = (imageData) => {
        setFarmData(prev => ({ ...prev, farmPhoto: imageData }));
    };

    return (
        <div>
            <Header user={{ ...user, avatar: profileData.avatar }} />

            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                >
                    Profile Settings
                </button>
                <button
                    className={`tab ${activeTab === 'farm' ? 'active' : ''}`}
                    onClick={() => setActiveTab('farm')}
                >
                    Farm Details
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
                        <label className="form-label">Producer name</label>
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
                </div>
            ) : (
                <div className="form-section">
                    <h2 className="form-label" style={{ fontSize: '18px', marginBottom: '20px' }}>
                        Change Profile Picture
                    </h2>

                    <UploadBox
                        title="Upload farm photo"
                        preview={farmData.farmPhoto}
                        onUpload={handleFarmPhotoUpload}
                    />

                    <div className="form-group" style={{ marginTop: '30px' }}>
                        <label className="form-label">Farm name</label>
                        <input
                            type="text"
                            name="farmName"
                            className="form-input"
                            value={farmData.farmName}
                            onChange={handleFarmChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="form-input"
                            value={farmData.location}
                            onChange={handleFarmChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">phone number</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-input"
                            value={farmData.phone}
                            onChange={handleFarmChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Descreption</label>
                        <textarea
                            name="description"
                            className="form-input"
                            value={farmData.description}
                            onChange={handleFarmChange}
                            rows="4"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">products type</label>
                        <div className="checkbox-group">
                            {['Fruits', 'Oils', 'Honey', 'Vegetables', 'Dairy'].map(type => (
                                <label key={type} className="checkbox-item">
                                    <input
                                        type="checkbox"
                                        checked={farmData.productTypes.includes(type)}
                                        onChange={() => handleProductTypeChange(type)}
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
