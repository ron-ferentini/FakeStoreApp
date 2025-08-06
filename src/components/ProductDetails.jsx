import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Container, Card, Spinner } from "react-bootstrap";
import FormModal from "./FormModal";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/product-listing");
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
 
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to fetch product details: ${error.message}`);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setDeleteSuccess(true);
      setShowModal(true);
    } catch (err) {
      setError(`Failed to delete product: ${err.message}`);
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
    <Container className="mt-4 justify-content-center">
      <h3 className="mb-2 text-center">Product Details</h3>
      <FormModal
        product={product}
        deleteSuccess={deleteSuccess}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      {deleteSuccess && (
        <Alert variant="success" dismissible>
          Product deleted successfully!
        </Alert>
      )}
      {product && (
        <Card
          style={{
            maxWidth: "400px",
            margin: "0 auto 1rem",
          }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            style={{
              maxHeight: "200px",
              width: "auto",
              objectFit: "contain",
              marginTop: "20px",
            }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
        </Card>
      )}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <Button variant="primary" href={`/edit-product/${product.id}`}>
          Edit Product
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete Product
        </Button>
        <Button variant="primary" href={`/product-listing`}>
          Back to Products
        </Button>
      </div>
    </Container>
  );
}

export default ProductDetails;
