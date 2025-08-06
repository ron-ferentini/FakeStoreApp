import { Container, Row, Col, Button } from "react-bootstrap";

function HomePage() {
  return (
    <Container className="mt-4 justify-content-center">
      <Row>
        <Col>
          <h1 className="mt-4 text-center">Welcome to the Fake Store App</h1>
          <p className="text-center">
            In this app, you can browse and purchase products from a fake online
            store.
          </p>
          <p className="text-center">
            This application is built using React and Bootstrap, and it fetches
            product data from a fake store API.
          </p>
          <p className="text-center">
            You can view, create, update, and delete products.
          </p>

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="primary" href="/product-listing">
              Products
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
