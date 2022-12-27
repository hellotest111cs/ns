import "./App.css";
import Header from "./component/header.js";
import ProductList from "./component/productlist";


import CartList from "./component/cartlist";
import { useState } from "react";
function App() {
const [product, setProduct] = useState([
{
url: "https://bd.gaadicdn.com/processedimages/kawasaki/kawasaki-ninja-h2/source/kawasaki-ninja-h261a5ba444bbd9.jpg",
category: "bike",
seller: "kawasaki",
price: 1000000,
},
{
url: "https://rukminim1.flixcart.com/image/416/416/krce64w0/computer/g/x/z/aspire-5-thin-and-light-laptop-acer-original-imag55gzykbb22cp.jpeg?q=70",
name: "acer laptop",
category: "laptop",
seller: "acer",
price: 30000,
},
{
url: "https://picsum.photos/id/180/2400/1600",
name: "AMZ Laptop 8GB RAM",
category: "Laptops",
seller: "Delhi Laptops",
price: 50000,
},
{
url: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SX522_.jpg",
name: "apple 14 pro max",
category: "phone",
seller: "apple",
price: 10000,
},
{
url:" https://imagescdn.thecollective.in/img/app/product/6/689792-7334022.jpg?",
name: "tshirt",
category: "cloth",
seller: "adidas",
price: 2000,
},
{
url: "https://www.gizmochina.com/wp-content/uploads/2018/02/Samsung-Galaxy-Tab-A-10.1-2017.jpg",
name: "Corona samsung tab",
category: "tablet",
seller: "government",
price: 3,
},




]);
const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false);
const addToCart = (data) => {
setCart([...cart, { ...data, quantity: 1 }]);
};
const handleShow = (value) => {
setShowCart(value);
};
return (

<div>
<Header count={cart.length} handleShow={handleShow}></Header>
{showCart ? (
<CartList cart={cart}></CartList>
) : (
<ProductList product={product} 
addToCart={addToCart}></ProductList>
)}
</div>
);
}
export default App;