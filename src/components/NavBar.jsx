import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3 mb-4">
      <Navbar.Brand href="/">FakeStore App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" >
          <Nav.Link as={NavLink} to="/" activeclassname="active">
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to="/product-listing" activeclassname="active">
            Product Listing
          </Nav.Link>

          <Nav.Link as={NavLink} to="/add-product" activeclassname="active">
            Add Product
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
