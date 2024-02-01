import React, { useEffect, useState } from "react";
import data from "../../data";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    const fetchData = async () => {
      try{
        const response = await axios.get('/api/products');
        setProducts(response.data);
      }catch(error){
        console.log("error:", error);
      }
      
      // setProducts(data);
      // console.log("products:", products);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.slug} className="product">
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
