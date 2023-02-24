/*
    objetivo 1 - quando o usuario clicar no botao de ver trailer, devemos abrir a modal com o video do trailer
        passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
        passo 2 - dar um jeito de identificar quando o usuario clicar no botao
        passo 3 - dar um jeito de pegar o elemento da modal no js
        passo 4 -abrir a modalna tela

    objetivo 2 - quando o usuario clicar no X devemos fechar a modal
        passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
        passo 2 - dar um jeito de identificar quando o usuário clicar no X
        passo 3 - fechar a modal
 */


// passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
// passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
console.log(linkDoVideo)

//passo 2 - dar um jeito de identificar quando o usuario clicar no botao
botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botao veja o trailer");
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
})



// objetivo 2 - quando o usuario clicar no X devemos fechar a modal
// passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js

const botaoFecharModal = document.querySelector(".fechar-modal");

//passo 2 - dar um jeito de identificar quando o usuário clicar no X

botaoFecharModal .addEventListener("click", () => {
    //  passo 3 - fechar a modal
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
})



