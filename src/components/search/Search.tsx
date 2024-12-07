import { Input } from "antd"
import { SearchOutlined, UserOutlined } from '@ant-design/icons';


const Search = () => {


    return (
        <div style={{backgroundColor: "purple" , width: "30%" }}> 
            <Input  placeholder="Search" style={{borderRadius:"20px", margin: "0px"}} prefix={<SearchOutlined />} />
        </div>
    )
}

export default Search 


















