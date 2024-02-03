import React from "react";
import "./CartScreen.css";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ErrorMessage from "../../ErrorMessage";
import axios from "axios";
import { addToCart, deleteCart } from "../../features/cart/AddToCartSlice";

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart.addCart);
  const dispatch = useDispatch();

  const handleButton = async (item, quantity) => {
    const { data } = await axios.get(`/api/product/${item._id}`);
    if (data.countInStock < item.quantity) {
      window.alert("sorry. Product out of stock");
      return;
    }
    dispatch(addToCart({ ...item, quantity }));
  };

  const handleDelete = (item) => {
    dispatch(deleteCart(item));
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <ErrorMessage>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </ErrorMessage>
          ) : (
            cartItems.map((item) => (
              <ListGroup key={item._id} className="mb-3">
                <ListGroup.Item>
                  <Row className="align-items-center">
                    <Col md={4} xs={12}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thubnail"
                      />{" "}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3} xs={6}>
                      <Button
                        onClick={() => handleButton(item, item.quantity - 1)}
                        variant="light"
                        disabled={item.quantity === 1}
                      >
                        <RemoveCircleRoundedIcon />
                      </Button>{" "}
                      <span>{item.quantity}</span>{" "}
                      <Button
                        variant="light"
                        disabled={item.countInStock === item.quantity}
                        onClick={() => handleButton(item, item.quantity + 1)}
                      >
                        <AddCircleRoundedIcon />
                      </Button>
                    </Col>
                    <Col md={3} xs={3}>
                      <strong>${item.price}</strong>
                    </Col>
                    <Col md={2} xs={3}>
                      <Button
                        variant="light"
                        onClick={() => handleDelete(item)}
                      >
                        <DeleteRoundedIcon />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            ))
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item className="d-grid">
                  <Button
                    type="button"
                    variant="primary"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartScreen;
