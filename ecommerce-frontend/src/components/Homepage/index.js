import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {Button, Card} from "react-bootstrap";
import * as Actions from '../../store/actions';

const Homepage = ({celulares, carrinho, adicionarNoCarrinho}) => (
    <div>
        {JSON.stringify(carrinho)}
        {celulares.length > 0 ? celulares.map(celular => {
            return (
                <Card key={celular.id} style={{width: '18rem'}}>
                    {/*<Card.Img style={{height: '30rem'}} variant="top" src="https://t.tudocdn.net/227370?w=60&h=120&fit=clip" />*/}
                    <Card.Body>
                        <Card.Title>{celular.modelo}</Card.Title>
                        <Card.Text>
                            R$ {celular.preco}
                        </Card.Text>
                        <Button variant="primary"
                                onClick={() => adicionarNoCarrinho(celular)}>Comprar</Button>
                    </Card.Body>
                </Card>
            )
        }) : <div>Nenhum celular</div>}

    </div>
);

const mapStateToProps = state => ({
    celulares: state.celulares,
    carrinho: state.carrinho
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);