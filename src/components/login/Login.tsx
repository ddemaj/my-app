import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Input } from "antd"


const Login  = () => {
    const [size, setSize] = useState<SizeType>('middle')



    return (
        <div style={{ backgroundColor: "orange"}}>
 <Button type="default" icon={<UserOutlined />} size={size} shape="round">
            Log in
          </Button>
        </div>
    )
}

export default Login