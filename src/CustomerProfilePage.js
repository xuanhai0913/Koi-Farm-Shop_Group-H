import React, { useState, useEffect } from 'react';
import './App.css';  

const CustomerProfilePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // Fetch customer profile data from the backend on component mount
    useEffect(() => {
        const fetchCustomerData = async () => {
            const response = await fetch('http://localhost:5000/api/customer');
            const data = await response.json();
            if (data) {
                setName(data.name);
                setEmail(data.email);
                setPhone(data.phone);
                setAddress(data.address);
            }
        };

        fetchCustomerData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const customerData = { name, email, phone, address };

        const response = await fetch('http://localhost:5000/api/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData),
        });

        if (response.ok) {
            alert(`Thông tin đã được cập nhật: ${name}, ${email}, ${phone}, ${address}`);
            // Optionally reset the form after submission
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
        } else {
            alert('Error updating customer information');
        }
    };

    return (
        <div className="profile-container">
            <h1>Trang Hồ Sơ Khách Hàng</h1>
            <form className="profile-form" onSubmit={handleSubmit}>
                <label>
                    Tên:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Số điện thoại:
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Địa chỉ:
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Cập nhật thông tin</button>
            </form>
        </div>
    );
};

export default CustomerProfilePage;
