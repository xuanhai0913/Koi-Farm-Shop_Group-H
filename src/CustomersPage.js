import {Space} from"antd";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import AppFooter from "./Components/AppFooter";
import { Route, Routes } from 'react-router-dom';
import Customers from "./Page/Customers";
function CustomersPage(){
  return (<div className="DashboardPage">
    <AppHeader/>
    <Space class="SideMenuAndpageContent">
      <SideMenu></SideMenu>
      <ContentCustomers>
      </ContentCustomers>
    </Space>
    <AppFooter/>
  </div>
  );
}
function ContentCustomers(){
    return(
        <Routes>
        
        <Route path="/" element={<Customers />} />
       
      </Routes>

    )
}
export default CustomersPage;