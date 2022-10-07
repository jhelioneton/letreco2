const tiles = document.querySelector(".tile-container");
const enterEApagar = document.querySelector("#enterEApagar"); // Botão de apagar e enter.
const tecladoPrimeiraLinha = document.querySelector("#tecladoPrimeiraLinha"); // Primeira linha do teclado.
const tecladoSegundaLinha = document.querySelector("#tecladoSegundaLinha"); // Segunda linha do teclado.
const tecladoTerceiraLinha = document.querySelector("#tecladoTerceiraLinha"); //Terceira linha do teclado.

const teclasPrimeiraLinha = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const teclasSegundaLinha = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const teclasTerceiraLinha = ["Z", "X", "C", "V", "B", "N", "M"];

const rows = 6; // Numero de tentativas.
const columns = 5; // Numero de letras.

let currentRow = 0; // Fileira atual.
let currentColumn = 0; // Coluna atual.
let palavra = "CORTE"; // Palavra resposta.
let gameMap = {};
for (let index = 0; index < palavra.length; index++) {
    gameMap[palavra[index]] = index;
}
const tentativas = [];

// Criar as fileiras e colunas.
for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    tentativas[rowIndex] = new Array(columns);
    const tileRow = document.createElement("div");
    tileRow.setAttribute("id", "row" + rowIndex); // Dar id para a fileira.
    tileRow.setAttribute("class", "tile-row"); // Dar uma classe para a fileira.
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const tileColumn = document.createElement("div");
        tileColumn.setAttribute("id", "row" + rowIndex + "column" + columnIndex); // Dar um id para a coluna separadamente da fileira.
        tileColumn.setAttribute("class", rowIndex === 0 ? "tile-column atual" : "tile-column desativado"); // Dar uma classe para coluna. 
        tileRow.append(tileColumn); // Adicionar a coluna a fileira.
        tentativas[rowIndex][columnIndex] = "";
    }
    tiles.append(tileRow); // Adicionar a fileira.
}

// Verificação das letras.
const verificarTentativa = () => {
    const tentativa = tentativas[currentRow].join("");
    if (tentativa.length !== columns) {
        return;
    }

    var currentColumns = document.querySelectorAll(".atual"); // Fileira atual da tentativa.
    for (let index = 0; index < columns; index++) {
        const letra = tentativa[index];
        if (gameMap[letra] === undefined) {
            currentColumns[index].classList.add("errado") // Verifica sw a letra está errada.
        } else {
            if (gameMap[letra] === index) {
                currentColumns[index].classList.add("certo") // Verifica se a letra está correta.
            } else {
                currentColumns[index].classList.add("lugarErrado") //Verifica se a letra está na posição errada.
            }
        }
    }

    if (tentativa === palavra) {
        window.alert("já acertou?") // Menssagem no caso de acerto da palavra.
        return
    } {
        if (currentRow === rows - 1) {
            window.alert("Acho que deu uma errada ai!") // Menssagem no caso de esgotaento das tentativas.
        } else {
            moveToNextRow()
        }
    }
};

// Função de ir para proxima linha de tentativa.
const irParaProximaTentativa = () => {
    var typingColumns = document.querySelectorAll(".atual")
    for (let index = 0; index < typingColumns.length; index++) {
        typingColumns[index].classList.remove("atual")
        typingColumns[index].classList.add("desativado")
    }
    currentRow++
    currentColumn = 0

    const currentRowEl = document.querySelector("#row" + currentRow)
    var currentColumns = currentRowEl.querySelectorAll(".tile-column")
    for (let index = 0; index < currentColumns.length; index++) {
        currentColumns[index].classList.remove("desativado")
        currentColumns[index].classList.add("atual")
    }
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

//Criar botão enter.
const enterButton = document.createElement("button");
enterButton.textContent = "Enter";
enterButton.addEventListener("click", verificarTentativa); // (correção) Acho que deu certo.
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

// Ao apertar em alguma letra no teclado, ela aparece no espaço da tentativa, e não ultrapassar o limite de espaços de letras.
const aoApertar = (key) => {
    if (currentColumn === columns) {
        return;
    }
    const currentTile = document.querySelector(
        "#row" + currentRow + "column" + currentColumn
    );
    currentTile.textContent = key;
    tentativas[currentRow][currentColumn] = key;
    currentColumn++;
};
