import { Table, Typography, Space } from "antd"

 function Customers() {
  return (
    <Space size={30} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        columns={[
          {
            title:"Tên",
            dataIndex:"tên",
          },
          {
            title:"Email",
            dataIndex:"email",
          },
          {
            title:"SĐT",
            dataIndex:"sđt",
          },
          {
            title:"Địa Chỉ",
            dataIndex:"địa chỉ",
          },
        ]}
      ></Table>
    </Space>
  )
}
export default Customers;