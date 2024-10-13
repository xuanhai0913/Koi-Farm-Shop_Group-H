import {Space} from"antd";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import AppFooter from "./Components/AppFooter";
import { Route, Routes } from 'react-router-dom';
import Inventory from "./Page/Inventory";
function DashboardPage(){
  return (<div className="DashboardPage">
    <AppHeader/>
    <Space class="SideMenuAndpageContent">
      <SideMenu></SideMenu>
      <Content>
      </Content>
    </Space>
    <AppFooter/>
  </div>
  );
}
function Content(){
    return(
        <Routes>
        
        <Route path="/" element={<Inventory />} />
       
      </Routes>

    )
}
export default DashboardPage;