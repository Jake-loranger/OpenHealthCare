import React, { useState } from "react";
import { Navbar, Nav, Dropdown, Image, NavbarBrand, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import ConnectWalletModal from "./ConnectWalletModal";

const SideNavBar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="d-flex border-end border-secondary border-1">

            {/* Desktop Sidebar */}
            <div className="d-none d-md-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
                <Nav className="nav-pills flex-column mb-auto">
                    <Navbar.Brand>
                        OpenHealthCare
                    </Navbar.Brand>
                    <hr />
                    <Nav.Link as={Link} to="/home" className="text-white">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/profile" className="text-white">
                        Profile
                    </Nav.Link>
                </Nav>
                <hr />
                <Button onClick={() => setShow(true)}>Connect Wallet</Button>
            </div>

            <ConnectWalletModal show={show} onHide={() => setShow(false)} />

            {/* Mobile Sidebar */}
            <div className="d-md-none flex-column flex-shrink-0 bg-dark" style={{ width: "4.5rem" }}>
                <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only">
                    {/* Home Icon (White) */}
                </a>

                <Nav className="nav-pills nav-flush flex-column mb-auto text-center">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/home" className="text-white">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/profile" className="text-white">
                            Profile
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
};

export default SideNavBar;
