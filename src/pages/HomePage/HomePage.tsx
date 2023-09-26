import { FunctionComponent, useState } from 'react'
import TopCategories from '../../components/topCategories/TopCategories';
import Filters from '../../components/filters/Filters';
import ProductList from '../../components/productList/ProductList';
import Header from  '../../components/header/Header';
import styles from './HomePage.module.css'


interface PropsType { }


const HomePage: FunctionComponent<PropsType> = () => {

  return (
    <div>
      <Header />
      <TopCategories />
      <div style={{
    display: "flex" ,
    flexDirection: "row",
    backgroundColor: "blue"
}}>
        <Filters/>
        <ProductList/>
      </div>
    </div> 
  )     
}

export default HomePage
