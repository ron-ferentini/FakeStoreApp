import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FormModal = ({ product, deleteSuccess, showModal, handleCloseModal }) => {
  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Deleted!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deleteSuccess && (
            <>
              <p>You have successfully deleted the product:</p>
              <p>
                <b>Name: </b>
                {product.title}
              </p>
              <p>
                <b>Email: </b>
                {product.price}
              </p>
              <p>
                <b>Phone: </b>
                {product.category}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
