import { Typography, Card, Statistic, Space, Table} from "antd"
import { DollarOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
  plugins,} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );
 function Dashboard() {
  const [orders, setOrderrs]=useState(0);
  const [inventory, setInventory]=useState(0);
  const [customers, setCustomors]=useState(0);
  const [revenue, setRevenue]=useState(0);
  return (
    <div>
      <Space size={40} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard icon={<ShoppingCartOutlined style={{color:"green", backgroundColor:"#66FF66", borderRadius:16, fontSize:24, padding:8, }} />} title={"Orders"} value={1234} />
          <DashboardCard icon={<ShopOutlined style={{color:"#FF99FF", backgroundColor:"#FFCCFF", borderRadius:16, fontSize:24, padding:8, }}/>} title={"Inventory"} value={1234} />
          <DashboardCard icon={<UserOutlined style={{color:"blue", backgroundColor:"#66CCFF", borderRadius:16, fontSize:24, padding:8, }}/>} title={"Customers"} value={1234} />
          <DashboardCard icon={<DollarOutlined style={{color:"red", backgroundColor:"#FF6666", borderRadius:16, fontSize:24, padding:8, }}/>} title={"Revenue"} value={1234} />
        </Space>
        <Space direction="horizontal">
        <Space>
          <RecentOrders />
        </Space>
        <Space>
          <DashboardChart />
      </Space>
      </Space>
      </Space>
    </div>
  );
}
function DashboardCard({ icon, title, value}){
  return(
    <Card style={{width:250,heigh:150}}>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title}  value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders(){
  return(
    <>
  <Typography.Text>Recent Orders</Typography.Text>
   <Table
    columns={[
      {
      title:"Title",
      dataIndex: "title",
      },
      {
        title:"Quantity",
        dataIndex: "quantity",
      },
      {
        title:"Price",
        dataIndex: "discountedPrice",
      },
        
    ]}
  ></Table>
  </>
  );
};
function DashboardChart(){
   const options={
    responsive: true,
    plugins:{
      Legend:{
        position:"bottom"
      },
      title:{
        display: true,
        text:"order Revenue"
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random()*1000),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random()*1000),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  return (
    <Card style={{width:600,height:350}}>
      <Bar options={options} data={data} />
    </Card>

  )
};

export default Dashboard;

