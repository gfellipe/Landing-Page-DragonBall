const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal() {
  modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});

const goku = document.getElementById("goku");

function gokuOn() {
  {
    goku.src = "./src/imagens/sayajin.jpg";
  }
}

function gokuOff() {
  {
    goku.src = "./src/imagens/normal.jpg";
  }
}

goku.addEventListener("mouseover", gokuOn);
goku.addEventListener("mouseleave", gokuOff);
