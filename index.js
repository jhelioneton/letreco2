const letras = document.querySelector(".letras");
const apagareEnter = document.querySelector("#apagareEnter"); // Botão de apagar e enter.
const primeiraLinhaTeclado = document.querySelector("#primeiraLinhaTeclado"); // Primeira linha do teclado.
const segundaLinhaTeclado = document.querySelector("#segundaLinhaTeclado"); // Segunda linha do teclado.
const terceiraLinhaTeclado = document.querySelector("#terceiraLinhaTeclado"); // Terceira linha do Teclado.

const teclasPrimeiraLinha = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const teclasSegundaLinha = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const teclasTerceiraLinha = ["Z", "X", "C", "V", "B", "N", "M"];

const rows = 6; // Numero de tentativas.
const columns = 5; // Numero de letras.

let currentRow = 0; // Fileira atual.
let currentColumn = 0; // Coluna atual.

const palavraDoDia = "corte";
const tentativas = [];

// Criar as fileiras e colunas.
for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    tentativas[rowIndex] = new Array(columns);
    const tileRow = document.createElement("div");
    tileRow.setAttribute("id", "row" + rowIndex); // Dar id para a fileira.
    tileRow.setAttribute("class", "tile-row"); // Dar uma classe para a fileira.

    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const tileColumn = document.createElement("div");
        tileColumn.setAttribute("id", "row" + rowIndex + "columns" + columnIndex); // Dar id da coluna separada da fileira.
        tileColumn.setAttribute("class", rowIndex === 0 ? "tile-column ativo" : "tile-column desativado"); // Dar classe para coluna.
        tileRow.append(tileColumn); // Adicionar a coluna na fileira.
        tentativas[rowIndex] [columnIndex] = "";
    }
    letras.append(tileRow); // Adicionar a fileira.
}

// Função apagar.
const apagar = () => {
    console.log("Apagou ");
}

//Criar botão de apagar.
const delButton = document.createElement("button");
delButton.textContent = "<";
delButton.addEventListener("click", apagar);
apagareEnter.append(delButton);

const verificarTentativa = () => {
    const verificar = tentativas [currentRow].join("");
    if(tentativas.length !== columns){
        return;
    }
}

//Criar botão enter.
const enterButton = document.createElement("button");
enterButton.textContent = "Enter";
enterButton.addEventListener("click", verificarTentativa); // (BUG) Quando alter o enter por verificarTentativa, o teclado some.
apagareEnter.append(enterButton);

// Criar teclado.
const criarTeclado = (keys, linhaTeclado) => {
    keys.forEach((key) => {
        var buttonElement = document.createElement("button");
        buttonElement.textContent = key;
        buttonElement.setAttribute("id", key);
        buttonElement.addEventListener("click", () => aoApertar(key));
        linhaTeclado.append(buttonElement);
    });
}

criarTeclado(teclasPrimeiraLinha, primeiraLinhaTeclado);
criarTeclado(teclasSegundaLinha, segundaLinhaTeclado);
criarTeclado(teclasTerceiraLinha, terceiraLinhaTeclado);

// Ao apertar em alguma letra no teclado, ela aparece no espaço da tentativa.
const aoApertar = (key) => {
    if(currentColumn === columns){ //Quando chegar no limite da coluna, e tentar colocar mais letras, não vai mais ficar dando erro.
        return;
    }
    const currentTile = document.querySelector("#row" + currentRow + "columns" + currentColumn);
    currentTile.textContent = key;
    currentColumn++;
}
