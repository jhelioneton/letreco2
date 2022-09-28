const letras = document.querySelector(".letras"); 

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