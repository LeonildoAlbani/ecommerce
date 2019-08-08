# E-Commerce de celulares

## Requisitos
Desenvolver um serviço de compras, com opção de buscar os produtos e efetuar uma compra.
Com base na estrutura criada e as funcionalidades desenvolvidas, montar ao menos uma proposta de extração de informações ou BI, cada qual contendo:
- Quais informações serão extraídas e apresentadas;
- Objetivo/relevância da visualização;
- Método/técnica aplicada;
- Necessidades adicionais de estrutura e ferramentas;


## Requisitos técnicos
- Os serviços devem ser feitos usando Quarkus;
- As interfaces devem ser feitas em ReactJS;
- Preferencialmente utilizar Docker para subir a stack;
- Disponibilizar os códigos no GitHub, e instruções para rodar localmente o projeto;

---

## Ideias para BI

### 1ª ideia: Guardar conteúdo pesquisado
#### Quais informações serão extraídas?
- Todo o conteúdo de texto pesquisado na plataforma, com no mínimo data e hora da pesquisa, assim como a navegação posterior 
(se adicionou algum produto no carrinho ou se fez uma pesquisa diferente).
#### Quais informações serão apresentadas?
- Expressões pesquisadas com um gráfico de calor pelo período solicitado.
- Ao fazer drill down no área de calor, irá apresentar os caminhos que foram seguidos após pesquisar por aquela expressão.
#### Objetivo/relevância da visualização?
- Objetivo: Conhecer melhor o público para tentar melhorar a conversão de vendas.
- Relevância: Bastante importante para saber se o preço de produtos existente estão competitivos em relação a concorrentes.
Também é possível identificar novos modelos de celulares que estão sendo lançados e as pessoas já estão procurando para 
procurar adiantar as compras conforme o desejo das pessoas.
#### Método/técnica aplicada
- Essa parte do banco poderia ser um Data Mart de um futuro Data Warehouse.
- O modelo poderia ser utilizado o modelo estrela inicialmente com o seu centro a venda convertida ou não e as outras "pernas"
da estrela poderiam ser dados de pagamento, perfil do comprador, etc (dados para outra extrações). Uma vantagem deste modelo
é que ele pode evoluir para o modelo flogo de neve.
- Inicialmente a extração poderia ser feita diretamente no banco principal (até que se crie um data warehouse),
após a criação deste banco, o transporte dos dados seria feito via ETL com uma possível "staging area" para transformação
de alguns dados de forma mais sintetizada, por exemplo: menos detalhes nas formas de pagamento, etc...
#### Necessidades adicionais de estrutura e ferramentas
- Fazer a gravação das navegações do usuário, isso interfere em alterações no front, back e banco.
- Futuramente um data warehouse para ter informações sintetizadas e históricas.
- Um frontend para visualização dessas informações + backend simples para busca dos dados já sintetizados.
- Utilizar ferramentas para ETL free (existem opções boas para se iniciar) por exemplo: Pentaho.

### 2ª ideia: Custo X Benefício por avaliação na plataforma + WebScrapping de outros sites
Se sobrar tempo vou detalhar

---

## Rodar o projeto

Pré-requisitos:
- Docker instalado (testei com a 19.03.1)
- Docker-compose instalado (testei com a 1.24.1)
- Conexão com internet (para o link das imagens)

Como rodar localmente?
- `docker-compose up -d`
- Aguardem baixar os dockers e os services subirem (o elasticsearch demora alguns segundos para subir)
- Após isso, acessar http://localhost

Obs: caso queiram rodar os projetos via código fonte, seguir o Readme de cada projeto.

---

#### Tarefas que poderiam ter sido feitas com mais tempo
- Dividir a store com mais reducers
- Responsividade, o react-bootstrap ajuda bastante nisso
- Paginação
- Gravar quantidade de cada celular na venda (demandaria controle da relação many-to-many, para simplificar deixei sem)
- Criar combo básico de forma de pagamento
- Fazer validação de campos na gravação de compras no backend
