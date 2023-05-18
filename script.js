// 1 - criando os elementos da página
  // criando a estrutura semântica básica da página (header, main e footer) no html:
let header = document.createElement('header');
let main = document.createElement('main');
let footer = document.createElement('footer')

let elementH1 = document.createElement('h1') // cria o h1 do header, que será o título da página
let elementDivHeader = document.createElement('div');
let elementUlDivHeader = document.createElement('ul');

let elementDivMain = document.createElement('div');
let elementUlMain = document.createElement('ul');
let btnClearBoard = document.createElement('button'); // Cria o botão

let labelInputBoardSize = document.createElement('label');
let inputBoardSize = document.createElement('input');
let btnGenereteBoard = document.createElement('button');


// Captura os elementos da página que já foram criados
// let elementLiHeader = document.getElementsByClassName('color')
// console.log(elementLiHeader);

// 2 - popular os elementos da página
  // adicionar o id e o texto pedido, e atribui o elemento  na página - requisito 1
elementH1.id = 'title';
elementH1.innerText = '"Paleta de Cores"';
elementUlDivHeader.id = 'color-palette';

// quadro de pixels
elementDivMain.id = 'div-pixel-board'
elementUlMain.id = 'pixel-board';

btnClearBoard.id = 'clear-board';
btnClearBoard.innerText = 'Limpar';

// Requisito 10 e 11
// labelInputBoardSize.innerText = 'Aumente o tamanho do quadro aqui: '
// inputBoardSize.id = 'board-size';
// inputBoardSize.type = 'number';
// inputBoardSize.min = '1';
// inputBoardSize.max = '50';
// inputBoardSize.innerHTML = 'select-size'

// btnGenereteBoard.id = 'generate-board';
// btnGenereteBoard.innerText = 'VQV'

// 3 - inserir o elemento na página
// insere a estrutura básica da página (header, main e footer) no html.
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

// insere o título da página
header.appendChild(elementH1);
header.appendChild(elementDivHeader);
elementDivHeader.appendChild(elementUlDivHeader);

header.appendChild(btnClearBoard);

// Requisito 10 e 11
// header.appendChild(labelInputBoardSize);
// header.appendChild(inputBoardSize);
// header.appendChild(btnGenereteBoard);


// Quadro de pixels
main.appendChild(elementDivMain);
elementDivMain.appendChild(elementUlMain);

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
const createPaletteColor = () => {
  for(let index = 1; index < 5; index += 1) {
    let elementLi = document.createElement('li');
    elementLi.classList = 'color'
    // elementLi.style.backgroundColor = generationColorHexadecimal(index)
    elementLi.style.backgroundColor = generationColorRGB(index);// passando as cores aleatóriamente
    elementUlDivHeader.appendChild(elementLi); // inserindo as li no elemento pai(Ul)
  }
  // Recupera a primeira li e seta a cor preta como padrão - requisito 3
  let firstLi = document.getElementsByClassName('color')[0];
  firstLi.classList.add('selected') // adiciona uma segunda classe na primeira li que possui a cor preta requisito 6
  firstLi.style.backgroundColor = 'black';
}
createPaletteColor();

// Cria o quadro de pixels com 25 quadrados
const createFramePixels = () => {
  for (let index = 0; index < 28; index +=1 ) {
    let elementLi = document.createElement('li');
    elementLi.classList = 'pixel';
    elementUlMain.appendChild(elementLi);
  }
}
createFramePixels();

// Seleciona a cor para pintar o pixel
const selectPixel = document.getElementById('color-palette');
selectPixel.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
})

// pinta o pixel clicado com a cor que foi selecionada.
  // recupera o elemento pela classe e guarda na const setColor
  const setColor = document.getElementsByClassName('pixel');
  for(let index = 0; index < setColor.length; index += 1) {
    setColor[index].addEventListener('click', (event) => {
      // const selectedColor =  document.querySelector('.selected').style.backgroundColor;
      // const setColorPixel = event.target;
      // setColorPixel.style.backgroundColor = selectedColor
      const selectedColor =  document.querySelector('.selected');
      event.target.style.backgroundColor = selectedColor.style.backgroundColor
    })
}

// Recupera o botão "Limpar"
const clearBoard = document.getElementById('clear-board');
// implementa o evento de clixk no botão
clearBoard.addEventListener('click', () => {
  // Recupera os elementos pixel
  const clearPixel = document.getElementsByClassName('pixel');
  // Percorre cada elemento pixel
  for(let index = 0; index < clearPixel.length; index += 1) {
    // Altera a cor de cada elemento para branco
    clearPixel[index].style.backgroundColor = 'white';
  }
})

// Requisito 10
// Resolve metade do requisito 10 e 11
// const limitSize = () => {
//   const inputSize = document.getElementById('board-size');
//   if(inputSize.value < 5) {
//     inputSize.value = 5;
//   }
//   if(inputSize.value > 50) {
//     inputSize.value = 50;
//   }
// }

// const btnVQV = document.getElementById('generate-board');
// btnVQV.addEventListener('click', (event) => {
//   const inputSize = document.getElementById('board-size');
//   if(inputSize.value === '') {
//     alert('Board inválido!');
//   } else {
//     limitSize();
//     createFramePixels(inputSize.value);
//   }
// })
