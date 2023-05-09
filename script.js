// 1 - criando os elementos da página
  // criando a estrutura semântica básica da página (header, main e footer) no html:
let header = document.createElement('header');
let main = document.createElement('main');
let footer = document.createElement('footer')

let elementH1 = document.createElement('h1') // cria o h1 do header, que será o título da página
let elementDivHeader = document.createElement('div');
let elementUlDivHeader = document.createElement('ul');

// 2 - popular os elementos da página
  // adicionar o id e o texto pedido, e atribui o elemento  na página - requisito 1
elementH1.id = 'title';
elementH1.innerText = '"Paleta de Cores"';
elementUlDivHeader.id = 'color-palette';

// função que gera cores aleátoiras
  // código retirado de https://horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
  // const generationColorHexadecimal = () => {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for(let index = 0; index < 6; index += 1) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  // referência: https://pt.stackoverflow.com/questions/320454/cores-aleat%C3%B3rias-nos-bot%C3%B5es
const generationColorRGB = () => {
  let r = Math.floor(Math.random() * 255), g = Math.floor(Math.random() * 255),
  b = Math.floor(Math.random() * 255);
  return `rgb(+${r}+${g}+${b})`;
}


// Criando 4 li e adicionando na Ul de forma dinâmica
const createLi = () => {
  for(let index = 1; index < 5; index += 1) {
    let elementLi = document.createElement('li');
    elementLi.classList = 'color'
    // elementLi.style.backgroundColor = generationColorHexadecimal(index)
    elementLi.style.backgroundColor = generationColorRGB(index);// passando as cores aleatóriamente
    elementUlDivHeader.appendChild(elementLi); // inserindo as li no elemento pai(Ul)
  }
  // Recupera a primeira li e seta a cor preta como padrão
  let firstLi = document.getElementsByClassName('color')[0];
  firstLi.style.backgroundColor = 'black';
}


// 3 - inserir o elemento na página
// insere a estrutura básica da página (header, main e footer) no html.
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

// insere o título da página
header.appendChild(elementH1);
header.appendChild(elementDivHeader);
elementDivHeader.appendChild(elementUlDivHeader);


// ---
createLi()


