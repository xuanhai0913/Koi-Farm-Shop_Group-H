import React from 'react'
import {BellFilled, MailOutlined} from '@ant-design/icons';
import{Badge, Image, Space, Typography} from "antd";
import getFontSizes from 'antd/es/theme/themes/shared/genFontSizes';
function AppHeader() {
  return (
    <div className='AppHeader'>
        <Image 
        width={80}
         src="https://onkoi.vn/wp-content/uploads/2024/04/logo-ca-koi.png"></Image>
         <Typography.Title>ADMIN</Typography.Title>
         <Space>
            <Badge>
                <MailOutlined style={{fontSize:24}}/>
            </Badge>
            <Badge>
                <BellFilled style={{fontSize:24}}/>
            </Badge>
         </Space>
    </div>
  );
}
export default AppHeader;
