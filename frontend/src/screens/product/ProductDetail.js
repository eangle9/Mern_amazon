import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../features/products/ProductSlice";
import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import Ratings from "../../Rating";
import { Helmet } from "react-helmet-async";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { addToCart } from "../../features/cart/AddToCartSlice";
import axios from "axios";
// import axios from "axios";

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart.addCart);
  const { slug } = params;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct(slug));
  }, [slug]);

  const addToCartHandler = async () => {
    const existItem = cartItems.find((item) => item._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product out of Stock");
      return;
    }
    dispatch(addToCart({ ...product, quantity }));
    navigate("/cart");
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage variant="danger">{error}</ErrorMessage>
      ) : (
        <Row>
          <Col md={6}>
            <img
              src={product.image}
              alt={product.name}
              className="image_large"
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <ListGroup.Item>
                <h1>{product.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <Ratings
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description : <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>${product.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? (
                          <Badge bg="success">In Stock</Badge>
                        ) : (
                          <Badge bg="danger">unAvailable</Badge>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <Button onClick={addToCartHandler} variant="primary">
                          Add to Cart
                        </Button>
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetail;
