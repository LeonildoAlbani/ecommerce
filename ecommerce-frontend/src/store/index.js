import {createStore} from 'redux';

const INITIAL_STATE = {
    celulares: [{id:1}],
    carrinho: []
};

//Daria pra dividir em mais reducers futuramente
function reducer(state = INITIAL_STATE, action) {

    if (action.type === 'ADICIONAR_NO_CARRINHO') {
        return {...state, carrinho: [...state.carrinho, action.celular]};
    }
    //
    // return api.get("/celular")
    //     .then(response => {
    //         console.log("teste2");
    //
    //         return {
    //             celulares:response,
    //             carrinho:[]
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         return {
    //             celulares:[],
    //             carrinho:[]
    //         }
    //     });

    return state
}

const store = createStore(reducer);

export default store;