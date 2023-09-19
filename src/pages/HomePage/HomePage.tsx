import { FunctionComponent, useState } from 'react'
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { wrap } from 'module';
import TopCategories from '../../components/topCategories/TopCategories';
import Filters from '../../components/filters/Filters';
import Categories from '../../components/categories/Categories';
import ProductList from '../../components/productList/ProductList';
import Logo from '../../components/logo/Logo';
import Cart from  '../../components/cart/Cart';
import Search from  '../../components/search/Search';
import Login from '../../components/login/Login';
interface PropsType { }


const HomePage: FunctionComponent<PropsType> = () => {


  
  return (
    <div>
      {/*logo*/}
      <Logo/>
      {/*cart*/}
      <Cart/>


     
      
   


 {/* top categories */}
 <TopCategories />

 {/* filters */}
 <Filters/>

{/* productList */}
<ProductList/>



</div>

  
  )     


}

export default HomePage

