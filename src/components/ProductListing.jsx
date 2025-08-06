import React, { useState, useEffect } from "react";
import { Container, Card, Button, Spinner, Row, Col } from "react-bootstrap";
import axios from "axios"; // Add this import
import ProductDetails from "./ProductDetails";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // Fetch products from the API
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to fetch products: ${error.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <h3>
          <Spinner
            animation="border"
            variant="info"
            style={{ marginRight: "15px" }}
            role="status"
          />
          Loading Product Listing...
        </h3>
      </Container>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <Container className="mt-4">
      <h3 className="mb-2">Product Listing</h3>
      <Row>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {!loading &&
          !error &&
          products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card
                style={{
                  height: "100%",
                  minHeight: "370px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{
                      maxHeight: "100px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Card.Body
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Card.Title
                    style={{
                      marginTop: "10px",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      marginBottom: "1.25rem", // Reduced space below the title
                    }}
                  >
                    {product.title}
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "0.25rem" }}>
                    Price: ${product.price}
                  </Card.Text>
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="primary"
                      href={`/product-details/${product.id}`}
                    >
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default ProductListing;
