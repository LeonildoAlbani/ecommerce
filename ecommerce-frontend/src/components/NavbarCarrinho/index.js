import React from 'react';
import {connect} from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carrinho from "../Carrinho";

const NavbarCarrinho = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>E-Commerce</Navbar.Brand>
        <Nav className="mr-auto"/> {/* TODO wrap para mover para direita, se der tempo crio classe css */}
        <Carrinho/>
    </Navbar>
);

export default connect()(NavbarCarrinho)