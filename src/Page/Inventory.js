import { Space, Typography,Table } from "antd"
import { useEffect, useState } from "react";
 function Inventory() {
  
  return (
    <Space size={30} direction="vertical">
        <Typography.Title level={4} >Inventory</Typography.Title>
        <Table 
          columns={[
            {
              title:"Tên Cá",
              dataIndex:"tên cá",
            },
            {
              title:"Loại Cá",
              dataIndex:"loại cá",
            },
            {
              title:"Tuổi",
              dataIndex:"tuổi",
            },
            {
              title:"Kích Thước",
              dataIndex:"kich thước",
            },
            {
              title:"Dịch Vụ",
              dataIndex:"dịch vụ",
            },
            {
              title:"Giá",
              dataIndex:"giá",
            },
            
          ]}
          
        ></Table>
    </Space>
  );
}
export default Inventory;