import { mdiMenu } from "@mdi/js"
import Icon from "@mdi/react"

const Logo = () =>{
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
    
     


     
    </div>













    )









}

export default Logo