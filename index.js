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

const verificarTentativa = () => {
    const tentativa = tentativas[currentRow].join("");
    if (tentativa.length !== columns) {
        return;
    }

    var currentColumns = document.querySelectorAll(".atual");
    for (let index = 0; index < columns; index++) {
        const letra = tentativa[index];
        if (gameMap[letra] === undefined) {
            currentColumns[index].classList.add("errado")
        } else {
            if (gameMap[letra] === index) {
                currentColumns[index].classList.add("certo")
            } else {
                currentColumns[index].classList.add("lugarErrado")
            }
        }
    }

    if (tentativa === palavra) {
        window.alert("já acertou?")
        return
    } {
        if (currentRow === rows - 1) {
            window.alert("Acho que deu uma errada ai!")
        } else {
            irParaProximaTentativa()
        }
    }
};

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

const criarTeclado = (keys, keyboardRow) => {
    keys.forEach((key) => {
        var buttonElement = document.createElement("button");
        buttonElement.textContent = key;
        buttonElement.setAttribute("id", key);
        buttonElement.addEventListener("click", () => aoApertar(key));
        keyboardRow.append(buttonElement);
    });
};

criarTeclado(teclasPrimeiraLinha, tecladoPrimeiraLinha);
criarTeclado(teclasSegundaLinha, tecladoSegundaLinha);
criarTeclado(teclasTerceiraLinha, tecladoTerceiraLinha);

const apagar = () => {
    if (currentColumn === 0) {
        return
    }

    currentColumn--
    tentativas[currentRow][currentColumn] = ""
    const tile = document.querySelector("#row" + currentRow + "column" + currentColumn)
    tile.textContent = ""
};

const apagarButton = document.createElement("button");
apagarButton.addEventListener("click", apagar);
apagarButton.textContent = "Del";
enterEApagar.append(apagarButton);

const enterButton = document.createElement("button");
enterButton.addEventListener("click", verificarTentativa);
enterButton.textContent = "ENTER";
enterEApagar.append(enterButton);

document.onkeydown = function (evt) {
    evt = evt || window.evt
    if (evt.key === "Enter") {
        verificarTentativa();
    } else if (evt.key === "Backspace") {
        apagar()
    } else {
        aoApertar(evt.key.toUpperCase())
    }
}
