import React, { useState } from 'react';
import './App.css';
import SearchPage from './SearchPage';
import ConsignmentPage from './ConsignmentPage';
import FeedbackPage from './FeedbackPage';
import CustomerProfilePage from './CustomerProfilePage';
import BuyFishPage from './BuyFishPage';
import BuyShopFish from './BuyShopFish';
import DashboardPage from './DashboardPage';
import InventoryPage from './InventoryPage';
import OrdersPage from './OrdersPage';
import CustomersPage from './CustomersPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    const [page, setPage] = useState('search');

    return (
            <div>
                <div class="header">
                <div class="contact-info">
                    <span>
                        024.32.666.777 - 024.39.555.888
                    </span>
                </div>
                <div class="social-icons">
                    <a href="#"><i class="fas fa-book"></i>Điều khoản chính sách</a>
                    <a href="#"><i class="fas fa-user"></i>Đăng nhập | Đăng ký</a>
                    <a href="#"><i class="fas fa-shopping-cart"></i>Giỏ hàng</a>
                    <a href="#"><i class="fab fa-facebook-f"></i> </a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <nav>
                <button><a href="/search">Trang Tìm Kiếm Cá Koi</a></button>
                <button><a href="/buyFish">Trang Mua Cá</a></button>
                <button><a href="/consignment">Trang Ký Gửi Cá Koi</a></button>
                <button><a href="/feedback">Trang Đánh Giá và Phản Hồi</a></button>
                <button><a href="/profile">Trang Hồ Sơ Khách Hàng</a></button>
                <button><a href="/dashboard">Trang Quản Trị</a></button>
            </nav>
            <div className="container">
                <Routes>
                    <Route path='/cart' element={<BuyShopFish />} />
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/consignment' element={<ConsignmentPage />} />
                    <Route path='/feedback' element={<FeedbackPage />} />
                    <Route path='/profile' element={<CustomerProfilePage />} />
                    <Route path='/buyFish' element={<BuyFishPage />} />
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/inventory' element={<InventoryPage />} />
                    <Route path='/orders' element={<OrdersPage />} />
                    <Route path='/customers' element={<CustomersPage />} />
                </Routes>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <p>© 2024 Trang Trại Cá Koi. Tất cả quyền được bảo lưu.</p>
                    <p>
                        Liên hệ: <a href="mailto:2251120085@ut.edu.vn">GMAIL</a>
                    </p>
                    <p><a href="https://cakoi01.vercel.app/">Truy cập trang web</a></p>
                </div>
            </footer>
        </div>
    );
};

export default App;
