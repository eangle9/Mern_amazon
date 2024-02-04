import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Ratings from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToCart } from "./features/cart/AddToCartSlice";

const Product = (props) => {
  const { product } = props;
  const { cartItems } = useSelector((state) => state.cart.addCart);
  const dispatch = useDispatch();

  const handleAddCart = async (item) => {
    const existItem = cartItems.find((item) => item._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
    }
    dispatch(addToCart({ ...product, quantity }));
  };
  return (
    <Card className="mb-3">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>
      <Card.Body className="product-info">
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Ratings rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => handleAddCart(product)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
