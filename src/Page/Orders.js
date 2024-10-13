import { Table, Typography, Space } from "antd"

 function Orders() {
  return (
    <Space size={30} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
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
            title:"Giá",
            dataIndex:"giá",
          },
        ]}
      ></Table>
    </Space>
  )
}
export default Orders;