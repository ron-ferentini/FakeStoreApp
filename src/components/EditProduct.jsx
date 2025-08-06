import { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { Container, Card, Spinner, Form, Button, Alert, Row, Col, } from "react-bootstrap";
import axios from "axios";

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setFormData({
          title: response.data.title || "",
          price: response.data.price || "",
          description: response.data.description || "",
          category: response.data.category || "",
        });
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to fetch product details: ${error.message}`);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      await axios.put(`https://fakestoreapi.com/products/${id}`, formData);
      setSuccess(true);
    } catch (err) {
      setError(`Failed to update product. Please try again. ${err.message}`);
    }
  };

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
          Loading Product Details...
        </h3>
      </Container>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <Container className="mt-4">
      <h3 className="mb-3 text-center">Edit Product</h3>
      {success && (
        <>
          <Alert variant="success" dismissible>
            Product updated successfully!
          </Alert>
          {navigate(`/product-details/${product.id}`)}
        </>
      )}
      {error && (
        <Alert variant="danger" dismissible>
          {error}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col md="5">
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label
                className="w-100"
                style={{
                  backgroundColor: "#3f86f1ff",
                  color: "white",
                  borderRadius: "6px",
                  padding: "6px",
                }}
              >
                Product Title
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mx-auto"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="5">
            <Form.Group controlId="formPrice" className="mb-3">
              <Form.Label
                className="w-100"
                style={{
                  backgroundColor: "#3f86f1ff",
                  color: "white",
                  borderRadius: "6px",
                  padding: "6px",
                }}
              >
                Product Price
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="mx-auto"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="5">
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label
                className="w-100"
                style={{
                  backgroundColor: "#3f86f1ff",
                  color: "white",
                  borderRadius: "6px",
                  padding: "6px",
                }}
              >
                Product Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter product description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="mx-auto"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="5">
            <Form.Group controlId="formCategory" className="mb-3">
              <Form.Label
                className="w-100"
                style={{
                  backgroundColor: "#3f86f1ff",
                  color: "white",
                  borderRadius: "6px",
                  padding: "6px",
                }}
              >
                Product Category
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="mx-auto"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" className="mt-3">
            Save Changes
          </Button>
        </div>
      </Form>
    </Container>
  );
}
export default EditProduct;
