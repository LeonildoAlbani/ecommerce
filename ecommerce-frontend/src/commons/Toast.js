import {toast} from "react-toastify";

const CONFIGURACOES_DEFAULT = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
};

export function success (mensagem){
    toast.success(mensagem, CONFIGURACOES_DEFAULT);
}

export function info (mensagem){
    toast.info(mensagem, CONFIGURACOES_DEFAULT);
}