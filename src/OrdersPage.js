import {Space} from"antd";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import AppFooter from "./Components/AppFooter";
import Inventory from "./Page/Inventory";
import { Route, Routes } from 'react-router-dom';
import Orders from "./Page/Orders";

function OrdersPage(){
  return (<div className="DashboardPage">
    <AppHeader/>
    <Space class="SideMenuAndpageContent">
      <SideMenu></SideMenu>
      <ContentOrders>
      </ContentOrders>
    </Space>
    <AppFooter/>
  </div>
  );
}
function ContentOrders(){
    return(
        <Routes>
        
        <Route path="/" element={<Orders />} />
       
      </Routes>

    )
}
export default OrdersPage;