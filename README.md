# Projeto Loja CiA  - Projeto para fins avaliativos e com objetivo de demonstrar princípios e conceitos de programação orientada ao objeto.
<br>
<h2> Integrandes do Grupo:</h2>
   <ul>
    <li>  Guilherme Catrinque Drummond Fernandes
    <li>  Maria Isabel Santana
    <li>  Rodrigo Pela Hernandes
    <li>  Windsor Lóss
  </ul>
<br>
<h2>Diagrama de Classes:</h>

![LojaCiA 1 3](https://user-images.githubusercontent.com/62221072/137609014-e80aa111-5658-4992-83eb-5685e152a850.png)


## Especificações inciais da aplicação:
* A aplicação simula a interface de uma loja online, tal como os casos de uso relacionados ao usuário/cliente.
* Conta com um sistema de login, autenticação, visualização de catálago, edição do carrinho, escolha do método de pagamento e envio.

## Tecnologias utilizadas:
* A IDE utilizada para implementação foi o <Strong>Visual Studio Code</Strong>.
* Para a produção dos diagramas de classes, utilizou-se a ferramenta UML <Strong>Visual Paradigm</Strong>.
* Foi utilizado a linguagem <Strong>TypeScript</Strong> para realizar a implementação. Por se se tratar de projeto com objetivo exarcebar os conceitos de POO, era necessário uma linguagem fortemente tipada. Adicionalmente chegamos a conclusão de que a interface visual seria mais prática para demonstração do funcionamento do código, e por isso, a linguagem mais focada em desenvolvimento web.
* Auxiliarmente, foi utilizado a biblioteca do <Strong>React</Strong> para facilitar a implementação, tal como <Strong>Styled Components</Strong> para a estilização. 

## Especificações do código:

### Classes:
* Loja
* Cliente
* Estoque
* Produto
* Endereco
* Carrinho
* Pedido
* Boleto
* Cartão
* Correios
* Transportadora

### Interfaces:
* IEntrega
* IPagamento

<h4>A classe <Strong>Gerador</Strong> foi usada apenas para simular o banco de dados com as informações necessárias para funcionamento da aplicação.</h4>

## Durante a criação das classes nos atentamos a três dos príncipios mais importantes em orientação ao objeto, vindo do famoso S.O.L.I.D:

<Strong>SRP — Single Responsibility Principle (Princípio da Responsabilidade Única):</Strong>
<p>Uma classe deve ter um, e somente um, motivo para mudar.
Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executa. Para fins do projeto:</p>
  <ol>
  <li> As classes implementadas são coesas com sua função;
  <li> Têm uma única responsabilidade o que gera menos dependências;
  <li> São fáceis de serem reutilizadas.
  </ol>
 
<Strong> ISP — Interface Segregation Principle (Princípio da Segregação da Interface): </Strong>
 <p> Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar.
Esse princípio basicamente diz que é melhor criar interfaces mais específicas ao invés de termos uma única interface genérica. </p>
  
  <p> Por isso, ao invés de ser usado apenas uma interface, que seria obrigada a implementar métodos com objetivos não coesos / genéricos, foram criadas separadamente de acordo com a função que desenpenha. No caso as interfaces foram criadas para:</p>
  <ol>
    <li> realizar funções necessárias relacionadas a forma de pagamento(<Strong>IPagamento</Strong>)
    <li> realizar funções necessárias relacionadas a forma de envio do pedido(<Strong>IEntrega</Strong>).  
  </ol>

<Strong>DIP — Dependency Inversion Principle (Princípio da Inversão de Dependência): </Strong>
<p> Dependa de abstrações, não de implementações. Segundo Uncle Bob, o definidor do conceito, módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender da abstração. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações. Par o projeto, é perceptível na classe <Strong>Pedido</Strong> para com as interfaces, pois:
  <ol>
    <li> depende da abstração atribuída as interfaces para executar sua função de gerar  o pedido; 
    <li> ao mesmo tempo, não precisa "endender" o que ocorre nas interfaces;
    <li> preservando sua individualidade como classe e sua dependência de abstração.
  </ol>
  
