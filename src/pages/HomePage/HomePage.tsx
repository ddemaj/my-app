import { FunctionComponent, useState } from 'react'
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

interface PropsType { }


const HomePage: FunctionComponent<PropsType> = () => {


  
  return (
    <div style={{ textAlign: 'left', marginLeft: 30, marginBottom: 24 }}>
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
     <h4> Categories </h4>
     <input type="text" id="search" placeholder="search" /> 
     <input type="button" id="cart" value="cart"/> 
     <input type="button" id="log in" value="log in"/> 

     
    </div>


<div>
  <h5> Deals</h5>
</div>
    </div>





    
  ) 

}

export default HomePage

