//Exemplo simples de componente stateless
import React from "react";

const Icon = ({icone, size = "50px"}) => (
    <i className={icone} style={{fontSize: size}}/>
);

export default Icon;