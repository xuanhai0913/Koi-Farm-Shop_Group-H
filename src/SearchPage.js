import React, { useState } from 'react';
const koiData = [
    { id: 1, name: 'Koi 1', type: 'thuần chủng', image: 'https://onkoi.vn/wp-content/uploads/2022/04/JPD-Fujiyama-thuc-an-35-protein-vip-8-tang-truong-on-dinh-khi-koi-truong-thanh-CA06-300x300.jpg' },
    { id: 2, name: 'Koi 2', type: 'lai F1', image: 'https://onkoi.vn/wp-content/uploads/2022/04/jpd-shori-thuc-an-vip-888-45-protein-sieu-tang-mau-va-body-CA05-300x300.jpg' },
    { id: 3, name: 'Koi 3', type: 'thuần Việt', image: 'https://onkoi.vn/wp-content/uploads/2022/04/JPD-shogun-thuc-an-vip-999-protein-40-cao-cap-lam-trang-CA03-300x300.jpg' },
];

const SearchPage = () => {
    const [filter, setFilter] = useState('all');

    const filteredKoi = koiData.filter(koi => filter === 'all' || koi.type === filter);

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
                    <div key={koi.id} className="koi-item">
                        <img src={koi.image} alt={koi.name} />
                        <h3>{koi.name}</h3>
                        <p>Loại: {koi.type}</p>
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
