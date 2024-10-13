import CaKoi1 from './assets/CaKoi/koi1.jpg'
import CaKoi2 from './assets/CaKoi/koi2.jpg'
import CaKoi3 from './assets/CaKoi/koi3.jpg'
import './BuyFishPage.css'

function BuyFishPage() {
    return <main class="container mx-auto py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white text-black rounded-lg overflow-hidden shadow-lg">
                <img alt="Koi fish image 1" class="w-full" src={CaKoi1} />
                <div class="p-4">
                    <div class="flex items-center mb-2">
                        <i class="fas fa-bullhorn text-red-600 mr-2">
                        </i>
                        <span class="bg-red-600 text-white px-2 py-1 rounded">
                            Đang bán
                        </span>
                    </div>
                    <h2 class="text-xl font-bold mb-2">
                        Onkoi showa 97 cm 5 tuổi #Showa_049
                    </h2>
                    <p class="mb-4">
                        Em koi showa 97 cm 5 tuổi thuộc dòng jumbo với kích thước rất khủng. Vì vậy, màu sắc, hoa văn, hình thể của em ấy đạt đến...
                    </p>
                    <p class="text-blue-600 mb-4">
                        Giá mua ngay:
                        <a class="underline" href="#">
                            Liên hệ
                        </a>
                    </p>
                    <button class="bg-red-600 text-white px-4 py-2 rounded">
                        <a href="/cart">ĐẶT HÀNG NGAY</a>
                    </button>
                    <div class="mt-4">
                        <p>
                            Người bán:
                            <a class="text-blue-600 underline" href="#">
                                OnKoi Quang Minh
                            </a>
                        </p>
                        <p>
                            Giới tính: Koi Cái
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
            <div class="bg-white text-black rounded-lg overflow-hidden shadow-lg">
                <img alt="Koi fish image 2" class="w-full" src={CaKoi2}/>
                <div class="p-4">
                    <div class="flex items-center mb-2">
                        <i class="fas fa-bullhorn text-red-600 mr-2">
                        </i>
                        <span class="bg-red-600 text-white px-2 py-1 rounded">
                            Đang bán
                        </span>
                    </div>
                    <h2 class="text-xl font-bold mb-2">
                        Onkoi Showa 3 tuổi 78 cm #Showa_050
                    </h2>
                    <p class="mb-4">
                        Onkoi tiếp tục đấu giá em Onkoi Showa 3 tuổi 78 cm của trại Dainichi mà chúng tôi có được tại cuộc "Đấu giá Dainichi tháng...
                    </p>
                    <p class="text-blue-600 mb-4">
                        Giá mua ngay:
                        <a class="underline" href="#">
                            Liên hệ
                        </a>
                    </p>
                    <button class="bg-red-600 text-white px-4 py-2 rounded">
                        <a href="/cart">ĐẶT HÀNG NGAY</a>
                    </button>
                    <div class="mt-4">
                        <p>
                            Người bán:
                            <a class="text-blue-600 underline" href="#">
                                OnKoi Quang Minh
                            </a>
                        </p>
                        <p>
                            Giới tính: Koi Cái
                        </p>
                        <p>
                            Năm sinh: 2018
                        </p>
                        <p>
                            Kích thước: 78 cm
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
            <div class="bg-white text-black rounded-lg overflow-hidden shadow-lg">
                <img alt="Koi fish image 3" class="w-full" src={CaKoi3} />
                <div class="p-4">
                    <div class="flex items-center mb-2">
                        <i class="fas fa-bullhorn text-red-600 mr-2">
                        </i>
                        <span class="bg-red-600 text-white px-2 py-1 rounded">
                            Đang bán
                        </span>
                    </div>
                    <h2 class="text-xl font-bold mb-2">
                        Lô koi Showa, Kohaku 75 đến 80 cm #Kohaku_051
                    </h2>
                    <p class="mb-4">
                        Đây là
                        <a class="text-blue-600 underline" href="#">
                            Lô koi Showa, Kohaku Onkoi
                        </a>
                        may mắn đấu giá thành công tại sự kiện Dainichi Cup lần thứ 33 ở Nhật Bản. Lô koi bao gồm...
                    </p>
                    <p class="text-blue-600 mb-4">
                        Giá mua ngay:
                        <a class="underline" href="#">
                            Liên hệ
                        </a>
                    </p>
                    <button class="bg-red-600 text-white px-4 py-2 rounded">
                        <a href="/cart">ĐẶT HÀNG NGAY</a>
                    </button>
                    <div class="mt-4">
                        <p>
                            Người bán:
                            <a class="text-blue-600 underline" href="#">
                                OnKoi Quang Minh
                            </a>
                        </p>
                        <p>
                            Giới tính: Koi Cái
                        </p>
                        <p>
                            Năm sinh: 2018
                        </p>
                        <p>
                            Kích thước: 75-80 cm
                        </p>
                        <p>
                            Giống:
                            <a class="text-blue-600 underline" href="#">
                                Cá koi Kohaku, Cá koi Showa
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
        </div>
    </main>
}
export default BuyFishPage;