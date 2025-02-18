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
import Icon from "../Icon";
import Busca from "../Busca"
import * as Formatter from "../../commons/Formatter";

const Homepage = ({celulares, carrinho, adicionarNoCarrinho}) => (
    <Jumbotron>
        <Busca/>
        {celulares.length > 0 ? celulares.map(celular => {
            return (
                <Row className="linha" key={celular.id}>
                    <Col xs={1}>
                        <Image style={{width: "60px", height: "120px"}} src={celular.urlImagem}/>
                    </Col>
                    <Col xs={2}>
                        <h5><strong>{celular.marca}</strong> {celular.modelo}</h5>
                        <h6>Custo benefício <strong>{celular.custoBeneficio}</strong></h6>
                        <h6>Nota do hardware <strong>{celular.notaHardware}</strong></h6>
                    </Col>
                    <Col xs={2}>
                        <SistemaOperacional so={celular.sistemaOperacional}/>
                    </Col>
                    <Col xs={2}>
                        <Processador nucleos={celular.processadorNucleos} clock={celular.processadorClock}/>
                    </Col>
                    <Col xs={2}>
                        <Display resolucao={celular.displayResolucao} tamanho={celular.displayTamanho}/>
                    </Col>
                    <Col xs={2}>
                        <Preco preco={celular.preco}/>
                    </Col><Col xs={1}>
                    <BotaoComprar
                        carrinho={carrinho}
                        celular={celular}
                        adicionarNoCarrinho={adicionarNoCarrinho}/>
                </Col>
                </Row>
            )
        }) : <div>Nenhum celular</div>}
    </Jumbotron>
);

//Exemplos de inner component
const SistemaOperacional = ({so}) => {
    if (so) {
        const isApple = so.includes("iOS"),
            icone = isApple ? "fa fa-apple" : "fa fa-android";

        return (
            <div>
                <Icon icone={icone}/>
                <h6>{so}</h6>
            </div>
        )
    }
    return null;
};

const Processador = ({nucleos, clock}) => {
    if (nucleos || clock) {
        return (
            <div>
                <Icon icone="fa fa-microchip"/>
                <h6>{nucleos} núcleos</h6>
                <h6>{clock} GHz</h6>
            </div>
        )
    }
    return null;
};

const Display = ({resolucao, tamanho}) => {
    if (resolucao || tamanho) {
        return (
            <div>
                <Icon icone="fa fa-mobile"/>
                <h6>{resolucao}</h6>
                <h6>{tamanho}"</h6>
            </div>
        )
    }
    return null;
};

const Preco = ({preco}) => {
    if (preco) {
        return (
            <div>
                <h5>{Formatter.formatMoney(preco)}</h5>
            </div>
        )
    }
    return null;
};

const BotaoComprar = ({carrinho, celular, adicionarNoCarrinho}) => {
    //Atualmente que não há paginação, não é muito legal fazer esse find, mas com uma paginação feita, o custo dele não é tão grande
    if (!carrinho.find(el => (el.id === celular.id))) {
        return <Button variant="primary" onClick={() => adicionarNoCarrinho(celular)}>Comprar</Button>
    } else {
        return <span>Celular no carrinho</span>
    }
};

const mapStateToProps = state => ({
    celulares: state.celulares,
    carrinho: state.compra.celulares /*exemplo de prop mapeada com nome diferente em componente*/
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);