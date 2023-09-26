import { Input } from "antd"
import { SearchOutlined, UserOutlined } from '@ant-design/icons';


const Search = () => {


    return (
        <div style={{backgroundColor: "purple" , width: "30%"}}> 
            <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
        </div>
    )
}

export default Search 


















