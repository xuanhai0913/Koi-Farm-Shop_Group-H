import { addCart } from './zustand/store';  
import React, { useEffect, useState } from 'react'; 
import CaKoi1 from './assets/CaKoi/koi1.jpg'
import CaKoi2 from './assets/CaKoi/koi2.jpg'
import CaKoi3 from './assets/CaKoi/koi3.jpg'
import './BuyFishPage.css'
import { useStore } from './zustand/store'

function BuyFishPage() {
    const [totalPrice, setTotalPrice] = useState(0);
    const fishs = [
        {
            id: 1,
            name: "Onkoi Karashi 4 năm tuổi 85 cm",
            sku: "Showa_049",
            description: "Em koi showa 97 cm 5 tuổi thuộc dòng jumbo với kích thước rất khủng. Vì vậy, màu sắc, hoa văn, hình thể của em ấy đạt đến...",
            seller: "OnKoi Quang Minh",
            gender: "Koi Cái",
            dob: "2016",
            size: "97 cm",
            fish: "Cá koi Showa",
            from: "Dainichi Koi Farm",
            thumbnail: CaKoi1,
            price: 300000, // Thêm thuộc tính price vào đây
        },
        {
            id: 2,
            name: "Onkoi Karashi 4 năm tuổi 85 cm",
            sku: "Showa_049",
            description: "Em koi showa 97 cm 5 tuổi thuộc dòng jumbo với kích thước rất khủng. Vì vậy, màu sắc, hoa văn, hình thể của em ấy đạt đến...",
            seller: "OnKoi Quang Minh",
            gender: "Koi Cái",
            dob: "2016",
            size: "97 cm",
            fish: "Cá koi Showa",
            from: "Dainichi Koi Farm",
            thumbnail: CaKoi2,
            price: 300000, // Thêm thuộc tính price vào đây
        },
        {
            id: 3,
            name: "Onkoi Karashi 4 năm tuổi 85 cm",
            sku: "Showa_049",
            description: "Em koi showa 97 cm 5 tuổi thuộc dòng jumbo với kích thước rất khủng. Vì vậy, màu sắc, hoa văn, hình thể của em ấy đạt đến...",
            seller: "OnKoi Quang Minh",
            gender: "Koi Cái",
            dob: "2016",
            size: "97 cm",
            fish: "Cá koi Showa",
            from: "Dainichi Koi Farm",
            thumbnail: CaKoi3,
            price: 300000, // Thêm thuộc tính price vào đây
        },
    ]

    const addCart = useStore(state => state.addCart)
    const getTotalPrice = useStore(state => state.getTotalPrice);

    const handleAddCart = (item) => {
        addCart({ ...item, quantity: 1 }); // Thêm thuộc tính quantity mặc định là 1
    }

    useEffect(() => {
        const price = getTotalPrice(); // Lấy tổng giá từ state
        setTotalPrice(price); // Cập nhật totalPrice
    }, [getTotalPrice]); // Phụ thuộc vào hàm getTotalPrice

    return <main class="container mx-auto py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fishs.map((fishItem) => (
                <div key={fishItem.id} class="bg-white text-black rounded-lg overflow-hidden shadow-lg">
                    <img alt="Koi fish image 1" class="w-full" src={fishItem.thumbnail} />
                    <div class="p-4">
                        <div class="flex items-center mb-2">
                            <i class="fas fa-bullhorn text-red-600 mr-2">
                            </i>
                            <span class="bg-red-600 text-white px-2 py-1 rounded">
                                Đang bán
                            </span>
                        </div>
                        <h2 class="text-xl font-bold mb-2">
                            {fishItem.name} #{fishItem.sku}
                        </h2>
                        <p class="mb-4">
                            {fishItem.description}
                        </p>
                        <p class="text-blue-600 mb-4">
                            Giá mua ngay:
                            <a class="underline" href="#">
                                300.000đ
                            </a>
                        </p>
                        <button class="bg-red-600 text-white px-4 py-2 rounded" onClick={() => { handleAddCart(fishItem) }}>
                            <a href="/cart">ĐẶT HÀNG NGAY</a>
                        </button>
                        <div class="mt-4">
                            <p>
                                Người bán:
                                <a class="text-blue-600 underline" href="#">
                                    {fishItem.seller}
                                </a>
                            </p>
                            <p>
                                Giới tính: {fishItem.gender}
                            </p>
                            <p>
                                Năm sinh: 2016
                            </p>
                            <p>
                                Kích thước: 97 cm
                            </p>
                            <p>
                                Giống:
                                <a class="text-blue-600 underline" href="#">
                                    Cá koi Showa
                                </a>
                            </p>
                            <p>
                                Nguồn gốc:
                                <a class="text-blue-600 underline" href="#">
                                    Dainichi Koi Farm
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </main>
}
export default BuyFishPage;