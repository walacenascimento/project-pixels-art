// 1 - criando os elementos da página
  // criando a estrutura semântica básica da página (header, main e footer) no html:
let header = document.createElement('header');
let main = document.createElement('main');
let footer = document.createElement('footer')

let elementH1 = document.createElement('h1') // cria o h1 do header, que será o título da página
console.log(elementH1);

// 2 - popular os elementos da página
  // requisito 1 - criar o elemento h1, adicionar o id e o texto pedido, e atribui o elemento  na página
elementH1.id = 'title';
elementH1.innerText = '"Paleta de Cores"'

// 3 - inserir o elemento na página
  // insere a estrutura básica da página (header, main e footer) no html.
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

// insere o título da página
header.appendChild(elementH1)
