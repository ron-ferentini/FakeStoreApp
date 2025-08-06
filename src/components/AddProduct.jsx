import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: 0.0,
    description: "",
    category: "",
  });

  const [submitted, setSubmitted] = useState(false);
  // const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  // Reset formData when submitted is true (success message shown)
  useEffect(() => {
    if (submitted) {
      setFormData({
        title: "",
        price: 0.0,
        description: "",
        category: "",
      });
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(
        "https://fakestoreapi.com/products",
        formData
      )
      .then((response) => {
        console.log(response.data);
        // setProduct(response.data);
        setSubmitted(true);
        setError(null);
      });
    } catch (err) {
      setError(`Error submitting the form. Please try again: ${err.message}`);
      setSubmitted(false);
    }
  };

  return (
    <Container className="mt-5 justify-content-center">
      <h2 className="text-center">Add Product</h2>

      {submitted && (
        <Alert variant="success" dismissible>
          The product {formData.title} created successfully!
        </Alert>
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
                autoFocus
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
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddProduct;
