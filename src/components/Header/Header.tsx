import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { links } from "@type/links";

export const Header: React.FunctionComponent = () => {

    return (
        <>
            <Navbar sticky="top" expand="md" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    {links.map((item, index) => (
                        <Nav.Item key={index}>
                            <Link to={item.link} className="nav-link">{item.title}</Link>
                        </Nav.Item>
                    ))}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
}