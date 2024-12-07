import { useState, useRef } from "react";
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { EnvironmentFilled, EnvironmentOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Input, InputRef, Select, Space } from "antd";

let index = 0;

const Address = () => {

    const [size, setSize] = useState<SizeType>('middle')
    


  
    return (
        <div style={{ backgroundColor: "black" }} >
           <Button type="default" icon={<EnvironmentOutlined />}  shape="round" >
            Address
          </Button>
 </div>

 )
};

 export default Address












