import React from 'react';
import CaKoi1 from './assets/CaKoi/koi1.jpg';
import './CompareFish.css';
import { useNavigate } from 'react-router-dom';

function CompareFish() {
    const navigate = useNavigate();
    return (
        <main className="container">
            <h2>So sánh cá Koi</h2>
            <table className="compare-table">
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Sản phẩm</th>
                        <th>Người bán</th>
                        <th>Giới tính</th>
                        <th>Năm sinh</th>
                        <th>Kích thước</th>
                        <th>Giống</th>
                        <th>Nguồn gốc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={CaKoi1} alt="Onkoi Karashi 85 cm" className="fish-image" /></td>
                        <td>Onkoi Karashi 85 cm</td>
                        <td>OnKoi - Quang Minh</td>
                        <td>Đực</td>
                        <td>2018</td>
                        <td>85 cm</td>
                        <td>Karashi</td>
                        <td>Nhật Bản</td>
                    </tr>
                    <tr>
                        <td><img src="https://placehold.co/50x50" alt="Onkoi Showa 97 cm" className="fish-image" /></td>
                        <td>Onkoi Showa 97 cm</td>
                        <td>OnKoi - Quang Minh</td>
                        <td>Cái</td>
                        <td>2019</td>
                        <td>97 cm</td>
                        <td>Showa</td>
                        <td>Nhật Bản</td>
                    </tr>
                    {/* Thêm các hàng cá khác ở đây */}
                </tbody>
            </table>
            <button className="compare-btn" onClick={() => navigate('/cart')}>
                Quay về giỏ hàng
            </button>
        </main>
    );
}

export default CompareFish;
