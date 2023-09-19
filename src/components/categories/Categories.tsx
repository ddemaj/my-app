import { mdiMenu } from "@mdi/js"
import Icon from "@mdi/react"

const Categories = () => {

    return (
        <div style={{    
            backgroundColor: "DodgerBlue",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}> 
    
    
       <Icon path={mdiMenu} size={1} />
         <h2> Spark Store</h2>
         <h4> Location </h4>
         <h4> Categories </h4>
         <input type="text" id="search" placeholder="search" /> 
         <input type="button" id="cart" value="cart"/> 
         <input type="button" id="log in" value="log in"/> 
    
         
        </div>
    )
}
export default Categories