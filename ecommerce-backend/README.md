## Procedimentos para rodar o projeto localmente

Pré-requisitos do quarkus:
- IDE
- JDK 1.8+ instalado com JAVA_HOME configurado
- Apache Maven 3.5.3+

Pré-requisitos do backend:
- Banco postgres
- Nó do elasticsearch(ES) rodando (pode ser docker)
- Tanto para o banco quanto o ES, eu subo o docker pelo compose para desenvolver
- Caso queiram alterar alguma config do ambiente, estão todas no arquivo application.properties nos resources

Como rodar localmente?
- `./mvnw compile quarkus:dev`

## Procedimentos para build:
- Buildar o fonte do backend quarkus: `./mvnw clean package`

- Executar o build do docker: `docker build -f src/main/docker/Dockerfile.jvm -t leonildoalbani/ecommerce-backend .`

- Caso queiram fazer o push, colocar vossos repositórios: `docker push leonildoalbani/ecommerce-backend`