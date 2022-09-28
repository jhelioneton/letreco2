const letras = document.querySelector(".letras");

const tentativas = 6;
const colunas = 5;

for (let tentativaIndex = 0; tentativaIndex < tentativas; tentativaIndex++) {
    const fileiraTentativa = document.createElement("div");
    tentativaLetra.setAttribute("id", "tentativa" + tentativaIndex); //dar id
    tentativaLetra.setAttribute("class", "fileira-tentativa"); //dar uma classe

    for (let colunaIndex = 0; colunaIndex < colunas; colunaIndex++) {
        const espacoLetra = document.createElement("div");
        espacoLetra.setAttribute("tentativa" + tentativaIndex + "colunas" + colunaIndex);
        espacoLetra.setAttribute("espaco-letra")
    }
}