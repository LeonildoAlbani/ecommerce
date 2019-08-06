//Essa classe eu já havia escrito há algum tempo, resolvi aproveitar no projeto.

// const urlBase = '/api';
const urlBase = 'http://localhost:8080';

const api = (url, opts, typeResponse) => {
    opts = opts || {};
    opts.method = opts.method || 'GET';
    opts.headers = opts.headers || getHeaders(typeResponse);
    url = `${urlBase}${url}`;

    return new Promise((resolve, reject) => {
        fetch(url, opts)
            .then((response) => {
                if (response.ok) {
                    if (typeResponse === 'json') {
                        return response.json();
                    } else if (typeResponse === 'pdf') {
                        return response.blob();
                    } else {
                        throw Error("api typeResponse não implementado")
                    }
                } else {
                    console.error(url, opts, response);
                    reject(response);
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((erro) => {
                console.error(url, opts, erro);
            });
    });
};

const apiJson = (url, opts) => {
    return api(url, opts, 'json');
};

const apiPdf = (url, opts) => {
    return api(url, opts, 'pdf');
};

const get = (url) => {
    return apiJson(url, { method: 'GET' });
};

const getPdf = (url) => {
    return apiPdf(url, { method: 'GET' });
};

const post = (url, body) => {
    return apiJson(url, { method: 'POST', body });
};

const put = (url, body) => {
    return apiJson(url, { method: 'PUT', body });
};

function getHeaders(typeResponse) {
    return new Headers({
        'Content-Type': `application/${typeResponse}`
    });
}

module.exports = {
    api,
    get,
    getPdf,
    post,
    put
};
