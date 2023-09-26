import {mdiMenu} from "@mdi/js"
import Icon from "@mdi/react"
import Search from "../search/Search"
import Cart from "../cart/Cart"
import Login from "../login/Login"
import Logo from "../logo/Logo"
import Address from "../Address/Address"
import Categories from "../categories/Categories"


const Header = () => {
 
return (
    <div style={{ 
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "grey"
        }}>


        <Logo />
       
   
        

      
    
        <Categories />
        <Address />
        <Search />
        <Cart />
        <Login />
        
    </div>
)
}

export default Header