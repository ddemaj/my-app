const ProductList = () => {

    return (
        
        <div id="products-list" style={{
            backgroundColor: "gray",
            
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center"}}>
          
            <><div id="single-product-card">




                    <img src={require('../../assets/lampp1.jpg')} alt="Zara Lamp" width="300" height="400" />
                    <h3> Lamp 1</h3>
                </div><div id="single-product-card">
                        <img src={require('../../assets/lampp1.jpg')} alt="Zara Lamp" width="300" height="400" />
                        <h3> Lamp 2</h3>
                    </div><div id="single-product-card">
                        <img src={require('../../assets/lampp1.jpg')} alt="Zara Lamp" width="300" height="400" />
                        <h3> Lamp 3</h3>
                    </div><div id="single-product-card">
                        <img src={require('../../assets/lampp1.jpg')} alt="Zara Lamp" width="300" height="400" />
                        <h3> Lamp 4</h3>
                    </div><div id="single-product-card">
                        <img src={require('../../assets/lampp1.jpg')} alt="Zara Lamp" width="300" height="400" />
                        <h3> Lamp 5</h3>
                    </div></>
          
          </div>
        
    )
          }
    export default ProductList













