import ProductCard from "../productCard/ProductCard"

const ProductList = () => {

    return (
        
        <div id="products-list" style={{
            backgroundColor: "brown",
            
    width: "100%",
            
            display: "flex",
            flexWrap: "wrap",
           alignItems: "start"
           
           }}>
          
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
          
          </div>
        
    )
          }
    export default ProductList













