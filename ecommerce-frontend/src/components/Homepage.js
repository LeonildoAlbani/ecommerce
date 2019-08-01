import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import api from "../commons/api";

export class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {celulares: []};
        api.get("/celular")
            .then(response => {
                console.log(response);
                this.setState({...this.state, celulares: response})
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                {this.state.celulares.length > 0 ? this.state.celulares.map(celular => {
                    return (
                        <Card style={{width: '18rem'}}>
                            {/*<Card.Img style={{height: '30rem'}} variant="top" src="https://t.tudocdn.net/227370?w=60&h=120&fit=clip" />*/}
                            <Card.Body>
                                <Card.Title>{celular.modelo}</Card.Title>
                                <Card.Text>
                                    R$ {celular.preco}
                                </Card.Text>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                    )
                }) : <div>Nenhum celular</div>}

            </div>
        )
    }
}