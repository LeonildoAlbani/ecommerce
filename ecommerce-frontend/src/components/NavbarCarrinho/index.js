import React from 'react';
import {connect} from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Icon from "../Icon";

const NavbarCarrinho = ({carrinho}) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>E-Commerce</Navbar.Brand>
        <Nav className="mr-auto"/> {/* TODO wrap para mover para direita, se der tempo crio classe css */}
        <Form inline>
            {carrinho.length > 0 &&
            <span>{carrinho.length} item(ns) adicionado(s)</span>}
            <Icon icone="fa fa-shopping-cart"/>
        </Form>
    </Navbar>
);

const mapStateToProps = state => ({
    carrinho: state.carrinho
});

export default connect(mapStateToProps)(NavbarCarrinho)