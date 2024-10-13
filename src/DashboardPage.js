import {Space} from"antd";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import AppFooter from "./Components/AppFooter";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Page/Dashboard";
import Inventory from "./Page/Inventory";



function DashboardPage(){
  return (<div className="DashboardPage">
    <AppHeader/>
    <Space class="SideMenuAndpageContent">
      <SideMenu></SideMenu>
      <ContentDashboard>
      </ContentDashboard>
    </Space>
    <AppFooter/>
  </div>
  );
}
function ContentDashboard(){
    return(
        <Routes>
        
        <Route path="/" element={<Dashboard />} />
        
        
       
      </Routes>

    )
}
export default DashboardPage;