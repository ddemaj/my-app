import React, { useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Input } from "antd"



const Cart = () => {
    const [size, setSize] = useState<SizeType>('middle')
    

    return (
        <div style={{ backgroundColor: "orange"}} >
 <Button type="default" icon={<ShoppingCartOutlined />} size={size} shape="round" >
            Cart
          </Button>
        </div>










    )
}

export default Cart