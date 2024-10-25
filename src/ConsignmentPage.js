import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from './firebaseConfig';
import axiosInstance from './api/axiosInstance';

const db = getFirestore(app);

const ConsignmentPage = () => {
    const [koiName, setKoiName] = useState('');
    const [koiType, setKoiType] = useState('thuần chủng');
    const [koiAge, setKoiAge] = useState('');
    const [koiSize, setKoiSize] = useState('');
    const [koiPurpose, setKoiPurpose] = useState('bán');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dữ liệu cá Koi
        const koiData = {
            name: koiName,
            type: koiType,
            age: koiAge,
            size: koiSize,
            purpose: koiPurpose
        };

        // Gửi dữ liệu lên API
        try {
            const response = await axiosInstance.post('/koi', koiData); // Gọi API từ backend
            alert('Gửi thành công: ' + JSON.stringify(response.data));

            // Gửi dữ liệu lên Firestore
            await addDoc(collection(db, 'consignments'), koiData);
            alert('Dữ liệu đã được lưu vào Firestore.');

            // Reset form
            setKoiName('');
            setKoiType('thuần chủng');
            setKoiAge('');
            setKoiSize('');
            setKoiPurpose('bán');
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
            alert('Gửi thất bại, vui lòng thử lại.');
        }
    };

    return (
        <div>
            <h1>Trang Ký Gửi Cá Koi</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Tên cá:
                    <input type="text" value={koiName} onChange={(e) => setKoiName(e.target.value)} required />
                </label>
                <label>
                    Loại cá:
                    <select value={koiType} onChange={(e) => setKoiType(e.target.value)} required>
                        <option value="thuần chủng">Thuần Chủng</option>
                        <option value="lai F1">Lai F1</option>
                        <option value="thuần Việt">Thuần Việt</option>
                    </select>
                </label>
                <label>
                    Tuổi:
                    <input type="number" value={koiAge} onChange={(e) => setKoiAge(e.target.value)} required />
                </label>
                <label>
                    Kích thước (cm):
                    <input type="number" value={koiSize} onChange={(e) => setKoiSize(e.target.value)} required />
                </label>
                <label>
                    Mục đích:
                    <select value={koiPurpose} onChange={(e) => setKoiPurpose(e.target.value)} required>
                        <option value="bán">Bán</option>
                        <option value="chăm sóc">Chăm Sóc</option>
                    </select>
                </label>
                <button type="submit">Gửi Cá Koi</button>
            </form>
        </div>
    );
};

export default ConsignmentPage;
