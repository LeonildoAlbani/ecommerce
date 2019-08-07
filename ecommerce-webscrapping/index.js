const requestify = require('requestify');
const cheerio = require('cheerio');

const paginas = ['', '_2', '_3', '_4', '_5', '_6', '_7', '_8', '_9', '_10'],
    urls = paginas.map(pagina => `https://www.tudocelular.com/celulares/fichas-tecnicas${pagina}.html?o=2`);

function buildPromiseUrl(url) {
    return requestify.get(url)
    .then( (response) => {
        // console.log('Sucesso ', url);
        const $ = cheerio.load(response.body);
        const celulares = $('article.phonelist_item');
        celulares.each((i, celular) => {
            const ratingColumn = $(celular).children('div.plist_ratingcolumn');
            const custoBeneficio = ratingColumn.children('div.quality').children('strong').text();
            const hardware = ratingColumn.children('div.colorbox').children('strong').text();
            const urlImagem = getUrlFromStyle($(celular).children('a.pic').children('img').attr('style'));
            const marca = $('h4', celular).children('strong').text();
            $('h4', celular).children('strong').remove();
            const modelo = $('h4', celular).text().trim();
            $('div.details', celular).children('a').children('span.price').children('span.money-symbol').remove();
            const preco = $('div.details', celular).children('a').children('span.price').text().replace('.', '');
            const liSistemaOperacional = $('li', celular);
            const sistemaOperacional = liSistemaOperacional.first().text().trim();
            const liCamera = liSistemaOperacional.next();
            const camera = liCamera.first().children('strong').text().replace('Mpx', '').trim();
            const liProcessador = liCamera.next();
            const clockProcessador = liProcessador.first().children('strong').text().replace('GHz', '').trim();
            liProcessador.first().children('strong').remove();
            const nucleosProcessador = liProcessador.first().text().replace('Core', '').trim();
            const liTela = liProcessador.next();
            const resolucaoTela = liTela.first().children('strong').text();
            liTela.first().children('strong').remove();
            const tamanhoTela = liTela.first().text().replace('Display', '').trim();

            console.log(getInsert({custoBeneficio, hardware, urlImagem, marca, modelo, preco, sistemaOperacional,
                camera, clockProcessador, nucleosProcessador, resolucaoTela, tamanhoTela}));
        });
    })
    .fail((err) => {
        console.error('Falhou ', err)
    });
}

function getUrlFromStyle(style) {
    const regex = /(')(.*)(')/;

    return regex.exec(style)[2];
}

const promises = urls.map(url => buildPromiseUrl(url));
Promise.all(promises);

function getInsert(celular){
    return  `INSERT INTO celular(id, custobeneficio, notahardware, marca, modelo, preco, sistemaoperacional, megapixelscamera, processadornucleos, processadorclock, displaytamanho, displayresolucao, urlimagem)
        VALUES (nextval('hibernate_sequence'), ${celular.custoBeneficio}, ${celular.hardware}, '${celular.marca}', '${celular.modelo}', ${celular.preco}, '${celular.sistemaOperacional}', ${celular.camera}, ${celular.nucleosProcessador}, ${celular.clockProcessador}, ${celular.tamanhoTela}, '${celular.resolucaoTela}', '${celular.urlImagem}');`
}