import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {Button} from "react-bootstrap";
import * as Actions from '../../store/actions';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import './homepage.css';

const Homepage = ({celulares, carrinho, adicionarNoCarrinho}) => (
    <Jumbotron>
        {JSON.stringify(carrinho)}
        {celulares.length > 0 ? celulares.map(celular => {
            return (
                <Row className="linha" key={celular.id}>
                    <Col xs={1}>
                        <Image style={{ width: "60px", height: "120px"}} src={celular.urlImagem}/>
                    </Col>
                    <Col xs={2}>
                        <h5><strong>{celular.marca}</strong> {celular.modelo}</h5>
                        <h6>Custo benefício <strong>{celular.custoBeneficio}</strong></h6>
                        <h6>Nota do hardware <strong>{celular.notaHardware}</strong></h6>
                    </Col>
                    <Col xs={1}>
                        <h6>{celular.sistemaOperacional}</h6>
                    </Col>
                    <Col xs={6}>
                        {JSON.stringify(celular)}
                    </Col>
                    <Col xs={1}>
                        <h5>R$ {celular.preco}</h5>
                    </Col><Col xs={1}>
                        <Button variant="primary" onClick={() => adicionarNoCarrinho(celular)}>Comprar</Button>
                    </Col>
                </Row>
            )
        }) : <div>Nenhum celular</div>}
    </Jumbotron>
);

const mapStateToProps = state => ({
    celulares: state.celulares,
    carrinho: state.carrinho
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);