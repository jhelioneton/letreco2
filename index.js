const letras = document.querySelector(".letras");
const apagareEnter = document.querySelector("#apagareEnter"); // Botão de apagar e enter.
const primeiraLinhaTeclado = document.querySelector("#primeiraLinhaTeclado"); // Primeira linha do teclado.
const segundaLinhaTeclado = document.querySelector("#segundaLinhaTeclado"); // Segunda linha do teclado.
const terceiraLinhaTeclado = document.querySelector("#terceiraLinhaTeclado"); // Terceira linha do Teclado.

const teclasPrimeiraLinha = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const teclasSegundaLinha = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const teclasTerceiraLinha= ["Z", "X", "C", "V", "B", "N", "M"];

const rows = 6; //Numero de tentativas.
const columns = 5; //Numero de letras.

// Criar as fileiras e colunas.
for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const tileRow = document.createElement("div");
    tileRow.setAttribute("id", "row" + rowIndex); // Dar id para a fileira.
    tileRow.setAttribute("class", "tile-row"); // Dar uma classe para a fileira.

    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const tileColumn = document.createElement("div");
        tileColumn.setAttribute("id", "row" + rowIndex + "columns" + columnIndex); // Dar id da coluna separada da fileira.
        tileColumn.setAttribute("class", "tile-column"); // Dar classe para coluna.
        tileRow.append(tileColumn); // Adicionar a coluna na fileira.
    }
    letras.append(tileRow); // Adicionar a fileira.
}

//  Criar a primeira linha do teclado.
teclasPrimeiraLinha.forEach((key) => {
    var buttonElement = document.createElement("button");
    buttonElement.textContent = key;
    buttonElement.setAttribute("id", key);
    buttonElement.addEventListener("click", () => console.log("tecla: ", key));
    primeiraLinhaTeclado.append(buttonElement);
})

// Criar a segunda linha do teclado.
teclasSegundaLinha.forEach((key) => {
    var buttonElement = document.createElement("button");
    buttonElement.textContent = key;
    buttonElement.setAttribute("id", key);
    buttonElement.addEventListener("click", () => console.log("tecla: ", key));
    segundaLinhaTeclado.append(buttonElement);
})

// Criar a terceira linha do teclado.
teclasTerceiraLinha.forEach((key) => {
    var buttonElement = document.createElement("button");
    buttonElement.textContent = key;
    buttonElement.setAttribute("id", key);
    buttonElement.addEventListener("click", () => console.log("tecla: ", key));
    terceiraLinhaTeclado.append(buttonElement);
})