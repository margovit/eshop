import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar(){
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                <Button 
                    style={{
                        width: "3rem",
                        height: "3rem",
                        backgroundImage: `url('file:///C:/Users/vitlytskam/Downloads/buy-cart-discount-3-svgrepo-com.svg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    variant="outline-primary"
                ></Button>
            </Container>
        </NavbarBs>
    )
}