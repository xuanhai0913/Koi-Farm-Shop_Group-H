import { useNavigate } from 'react-router-dom';
import CaKoi1 from './assets/CaKoi/koi1.jpg'
import './BuyShopFish.css'
import { DeleteOutlined } from '@ant-design/icons';
import { useStore } from './zustand/store';

function BuyShopFish() {
    const navigate = useNavigate();
    const cart = useStore(state => state.cart);
    const removeCart = useStore(state => state.removeCart);
    const setQuantity = useStore(state => state.setQuantity);

    const handleRemoveCart = (itemId) => {
        removeCart(itemId);
        window.location = '/cart';
    };

    const getSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const totalPrice = getSubtotal();

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity > 0) {
            setQuantity(itemId, newQuantity);
        }
    };

    const handleKeyDown = (e, itemId) => {
        const currentValue = e.target.valueAsNumber || 0;
        if (e.key === 'ArrowUp') {
            handleQuantityChange(itemId, currentValue + 1); // Tăng số lượng
        } else if (e.key === 'ArrowDown') {
            handleQuantityChange(itemId, currentValue > 1 ? currentValue - 1 : 1); // Giảm số lượng
        }
    };

    return (
        <main className="container">
            <h2>Giỏ hàng</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tạm tính</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <button onClick={() => handleRemoveCart(item.id)}>
                                    <DeleteOutlined />
                                </button>
                            </td>   
                            <td className="flex gap-5 items-center">
                                <img alt={item.name} src={item.thumbnail} />
                                <div>
                                    {item.name}
                                    <br />
                                    Vendor: {item.seller}
                                </div>
                            </td>
                            <td>
                                {item.price.toLocaleString()} ₫
                            </td>
                            <td>
                                <input 
                                    type="number" 
                                    min="1" 
                                    style={{ width: "70px", textAlign: "center" }} 
                                    value={item.quantity} 
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} 
                                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                                />
                            </td>
                            <td>
                                {(item.price * item.quantity).toLocaleString()} ₫
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="compare-btn" onClick={() => navigate('/compare-fish')}>
            So sánh cá Koi
        </button>
        <div className="cart-summary">
                <h2>Cộng giỏ hàng</h2>
                <table>
                    <tr>
                        <th>Tạm tính</th>
                        <td>{totalPrice.toLocaleString()} ₫</td>
                    </tr>
                    <tr>
                        <th>Tổng</th>
                        <td>{totalPrice.toLocaleString()} ₫</td>
                    </tr>
                </table>
                
            <a className="checkout-btn" href="#">
                    Tiến hành thanh toán
                </a>
            </div>
        

        </main>
    );
}

export default BuyShopFish;