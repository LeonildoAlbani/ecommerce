import React from 'react';
import {connect} from 'react-redux';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Icon from "../Icon";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Carrinho = ({carrinho}) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Form inline>
            <ButtonCarrinho
                carrinho={carrinho}
                setModalShow={setModalShow}/>

            <ModalCarrinho
                show={modalShow}
                onHide={() => setModalShow(false)}
                carrinho={carrinho}/>
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
}

const ModalCarrinho = (props) => {
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
                <h4>Celulares adicionados</h4>
                <ListGroup>
                    {props.carrinho.map(itemCarrinho =>(
                        <Row>
                            <Col xs={6}>
                                {itemCarrinho.marca} {itemCarrinho.modelo}
                            </Col>
                            <Col xs={2}>
                                Quantidade
                            </Col>
                            <Col xs={2}>
                                {itemCarrinho.preco}
                            </Col>
                            <Col xs={2}>
                                <Button>Remover</Button>
                            </Col>
                        </Row>
                    ))}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Comprar</Button>
            </Modal.Footer>
        </Modal>
    )
};
export default connect(state => ({carrinho: state.carrinho}))(Carrinho);