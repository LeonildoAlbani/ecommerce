## Procedimentos para rodar o projeto localmente

Pré-requisitos:

- Node instalado (usei a 10.15.3)
- NPM instalado (usei a 6.4.1)

Como rodar localmente?
- `npm install`
- `npm start`

## Procedimentos para build:
- Buildar o fonte do front do react (já faz no Dockerfile): `npm run build`

- Executar o build do docker: `docker build -f Dockerfile -t leonildoalbani/ecommerce-frontend .`

- Caso queiram fazer o push, colocar vossos repositórios: `docker push leonildoalbani/ecommerce-frontend`