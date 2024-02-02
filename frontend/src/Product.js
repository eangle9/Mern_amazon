import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Ratings from "./Rating";

const Product = (props) => {
  const { product } = props;
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
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
