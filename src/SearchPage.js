import React, { useEffect, useState } from 'react';
import axiosInstance from './api/axiosInstance';

const SearchPage = () => {
    const [koiData, setKoiData] = useState([]); // Khai báo state cho dữ liệu Koi
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchKoiData = async () => {
            try {
                const response = await axiosInstance.get('/koi'); // Gọi API để lấy dữ liệu Koi
                setKoiData(response.data); // Gán dữ liệu vào state
            } catch (error) {
                console.error("Error fetching Koi data", error);
            }
        };

        fetchKoiData();
    }, []);

    const filteredKoi = koiData.filter(koi => filter === 'all' || koi.koiType === filter);

    return (
        <div>
            <h1>Trang Tìm Kiếm Cá Koi</h1>
            <div className="filter-container">
                <label className="koi-label">Chọn loại cá Koi:</label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">Tất cả</option>
                    <option value="thuần chủng">Thuần Chủng</option>
                    <option value="lai F1">Lai F1</option>
                    <option value="thuần Việt">Thuần Việt</option>
                </select>
            </div>
            <div id="koi-list">
                {filteredKoi.map(koi => (
                    <div key={koi.koiId} className="koi-item">
                        <img src={koi.imageUrl} alt={koi.name} />
                        <h3>{koi.name}</h3>
                        <p>Loại: {koi.koiType}</p>
                    </div>
                ))}
            </div>
            <div className="botset-container">
                <img src="https://onkoi.vn/wp-content/themes/themenamewoo/images/bg_botsec1.png" alt="Botset" />
            </div>
        </div>
    );
};

export default SearchPage;
