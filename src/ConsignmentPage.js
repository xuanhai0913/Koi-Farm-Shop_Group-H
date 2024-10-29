import React, { useState } from 'react';

const ConsignmentPage = () => {
    const [koiName, setKoiName] = useState('');
    const [koiType, setKoiType] = useState('thuần chủng');
    const [koiAge, setKoiAge] = useState('');
    const [koiSize, setKoiSize] = useState('');
    const [koiPurpose, setKoiPurpose] = useState('bán');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Gửi thành công: ${koiName}, Loại: ${koiType}, Tuổi: ${koiAge}, Kích thước: ${koiSize} cm, Mục đích: ${koiPurpose}`);
        // Reset form
        setKoiName('');
        setKoiType('thuần chủng');
        setKoiAge('');
        setKoiSize('');
        setKoiPurpose('bán');
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
