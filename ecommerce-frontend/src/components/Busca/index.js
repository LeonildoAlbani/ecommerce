import React from 'react';
import {connect} from 'react-redux';
import {Button, FormControl} from "react-bootstrap";
import * as Actions from "../../store/actions";
import './busca.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

//Exemplo de class component (a pouco tempo descobri functional components e gostei mais)
//Mas fica aqui só a nível de exemplo mesmo :)
class Busca extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buscaComES: '',
            buscaSemES: ''

        };
    }

    onChange(campo, evento) {
        let valor = evento.target.value;

        this.setState({[campo]: valor});
    }

    onClickOrEnter(elasticSearch) {
        Actions.buscarListaCelulares(elasticSearch ? this.state.buscaComES : this.state.buscaSemES, elasticSearch);
    }

    handleKeyPress(elasticSearch, target) {
        if (target.charCode === 13) /*enter*/ {
            this.onClickOrEnter(elasticSearch)
        }
    }

    render() {
        return (
            <Container className="container-pesquisa">
                <Alert variant='primary'>
                    Criei essas 2 formas de pesquisa pois eu estava curioso em relação ao elasticsearch (nunca havia trabalhado com ele)
                </Alert>
                <Row>
                    <Col xs={4}>
                        <FormControl
                            type="text"
                            placeholder="Pesquisar com elasticsearch"
                            value={this.state.buscaComES}
                            onChange={this.onChange.bind(this, 'buscaComES')}
                            onKeyPress={this.handleKeyPress.bind(this, true)}/>
                    </Col>
                    <Col xs={1}>
                        <Button
                            type="button"
                            onClick={this.onClickOrEnter.bind(this, true)}>Pesquisar</Button>
                    </Col>
                </Row>
                <Row className="last-row-pesquisa">
                    <Col xs={4}>
                        <FormControl
                            type="text"
                            placeholder="Pesquisar sem elasticsearch"
                            value={this.state.buscaSemES}
                            onChange={this.onChange.bind(this, 'buscaSemES')}
                            onKeyPress={this.handleKeyPress.bind(this, false)}/>
                    </Col>
                    <Col xs={1}>
                        <Button
                            type="button"
                            onClick={this.onClickOrEnter.bind(this, false)}>Pesquisar</Button>
                    </Col>

                </Row>
            </Container>

        )
    }
}

export default connect()(Busca);