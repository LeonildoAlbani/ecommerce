FROM node:9.6.1 as builder

# cria diretório padrão
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# copia os arquivos para o docker
COPY . /usr/src/app

RUN npm cache clean --force

RUN rm -rf node_modules

# instala os módulos necessários
RUN npm install

# faz build do projeto
RUN npm run build

# pega a base do docker nginx
FROM nginx:1.13.9-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
