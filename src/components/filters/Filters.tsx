const Filters = () => {

return (
    <div id="filters-and-products-container" 
    style={{
  backgroundColor: "gray",
  display: "flex",
  flexFlow: "row",
  flexWrap: "nowrap",
}}>
    
<div id="filters" style={{
  backgroundColor: "Yellow",
}}>
 <h2> All stores</h2>
 <h3> Sort</h3>
 <h5> Picked for you</h5>
 <h5> Most popular</h5>
 <h5> Rating</h5>
 <h5>Delivery time</h5>

<h2> From Uber Eats</h2>
<h5> Deals </h5>
<h5> Best Overall</h5>

<h2> Price Range </h2>
<h2> Max Delivery Fee</h2>
<h2> Dietary</h2>
<h5> Vegetarian</h5>
<h5> Vegan</h5>
<h5> Gluten-free</h5>
<h5> Halal </h5>
</div>
</div>
)
}

export default Filters