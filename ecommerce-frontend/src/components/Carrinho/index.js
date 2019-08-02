import React from 'react';
import {connect} from 'react-redux';

const Carrinho = ({carrinho}) => (
    <div>teste{JSON.stringify(carrinho)}</div>
);

export default connect(state => ({carrinho: state.carrinho}))(Carrinho);