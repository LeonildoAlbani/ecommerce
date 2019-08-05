import React from 'react';
import {connect} from 'react-redux';
import {Button, FormControl} from "react-bootstrap";
import * as Actions from "../../store/actions";
import './busca.css'
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

//Exemplo de class component (a pouco tempo descobri functional components e gostei mais)
//Mas fica aqui só a nível de exemplo mesmo :)
class Busca extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            busca: ''
        };
    }

    onChange(evento) {
        let valor = evento.target.value;

        this.setState({busca: valor});
    }

    onClickOrEnter() {
        Actions.buscarListaCelulares(this.state.busca);
    }

    handleKeyPress(target) {
        if (target.charCode === 13) /*enter*/ {
            this.onClickOrEnter()
        }
    }

    onSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <Row>
                <Form inline
                    className="formulario"
                    onSubmit={this.onSubmit.bind(this)}>
                    <FormControl
                        type="text"
                        placeholder="Pesquisar"
                        className="campo-busca"
                        value={this.state.busca}
                        onChange={this.onChange.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)}/>
                    <Button
                        type="button"
                        onClick={this.onClickOrEnter.bind(this)}>Pesquisar</Button>
                </Form>
            </Row>
        )
    }
}

export default connect()(Busca);