import React from 'react';
import {connect} from 'react-redux';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Icon from "../Icon";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import * as formatter from "../../commons/formatter";
import './carrinho.css'
import * as Actions from "../../store/actions";
import {bindActionCreators} from "redux";

const Carrinho = ({compra, alterarNomeCliente}) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Form inline>
            <ButtonCarrinho
                carrinho={compra.celulares}
                setModalShow={setModalShow}/>

            <ModalCarrinho
                show={modalShow}
                onComprar={onComprar.bind(this, compra, setModalShow)}
                onHide={()=>{setModalShow(false)}}
                compra={compra}
                alterarNomeCliente={alterarNomeCliente}/>
        </Form>
    )
};

const ButtonCarrinho = ({carrinho, setModalShow}) => {
    if (carrinho && carrinho.length > 0) {
        return (
            <Button variant="light" onClick={() => setModalShow(true)}>
                <span>{carrinho.length} item(ns) adicionado(s)</span>
                <Icon icone="fa fa-shopping-cart"/>
            </Button>
        );
    } else {
        return (
            <Button variant="light" disabled={true}>
                <Icon icone="fa fa-shopping-cart"/>
            </Button>
        );
    }
};

const ModalCarrinho = ({onComprar, alterarNomeCliente, ...props}) => {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Carrinho de compras
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    {props.compra.celulares.map(itemCarrinho => (
                        <Row key={itemCarrinho.id} className="linha-carrinho">
                            <Col xs={2}>
                                <Image style={{width: "60px", height: "120px"}} src={itemCarrinho.urlImagem}/>
                            </Col>
                            <Col xs={7} className="vertical-center">
                                <h4>{itemCarrinho.marca} {itemCarrinho.modelo}</h4>
                            </Col>
                            <Col xs={3} className="vertical-center">
                                <h4>{formatter.formatMoney(itemCarrinho.preco)}</h4>
                            </Col>
                        </Row>
                    ))}
                    <Totalizador celulares={props.compra.celulares}/>
                </Container>
                <hr/>
                <Container>
                    <h3>Dados para comprar</h3>
                    <Form.Group controlId="compra.nomeCliente">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text"
                                      placeholder="João da Silva"
                                      value={props.compra.nomeCliente}
                                      onChange={onChange.bind(this, alterarNomeCliente)}/>
                    </Form.Group>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onComprar}>Comprar</Button>
            </Modal.Footer>
        </Modal>
    )
};

//Criado apenas para não passar o acoplamento de ter evento.target.value para a action
function onChange(alterarNomeCliente, evento) {
    console.log(evento, alterarNomeCliente);
    let valor = evento.target.value;

    alterarNomeCliente(valor);
}

const Totalizador = ({celulares}) => (
    <Row>
        <Col xs={{span: 1, offset: 8}}>
            <h4>Total:</h4>
        </Col>
        <Col xs={3}>
            <h4>{formatter.formatMoney(celulares.reduce((sum, item) => sum += item.preco, 0))}</h4>
        </Col>
    </Row>
);

const onComprar = (compra, setModalShow) => {
    Actions.gravarCompra(compra);
    setModalShow(false);
};

const mapStateToProps = state => ({
    compra: state.compra
});
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);