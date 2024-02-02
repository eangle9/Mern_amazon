import React, { useEffect } from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/ProductsSlice";
import { Col, Row } from "react-bootstrap";
import Product from "../../Product";
import { Helmet } from "react-helmet-async";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <h1>Featured Products</h1>
      <Helmet>
        <title>Amazon</title>
      </Helmet>
      <div className="products">
        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
