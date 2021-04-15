import * as ReactBootStrap from "react-bootstrap";
import CartIcon from "../CartIcon/CartIcon"

export default function Navbar(){
    return (
        <div>
            <ReactBootStrap.Navbar bg="dark" expand="lg">
                <ReactBootStrap.Navbar.Brand href="#home" className="text-light"> Game Center </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="#home" className="text-light"> Home </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#catalogo" className="text-light"> Catalogo </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#carrito" className="text-light"> <CartIcon /> </ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
        
    )
};



