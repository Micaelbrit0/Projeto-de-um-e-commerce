function mudarTema() {
  
  let cabecalho = document.querySelector("#menu")
  cabecalho.style.backgroundColor = "black"
  //Muda o cabeçalho

  let rodape = document.querySelector("footer")
  rodape.style.backgroundColor = "black"

  //Muda o rodapé

  let fundo = document.querySelector("body")
  fundo.style.backgroundColor = "#262626"

  //muda o body para aquele cinza mais claro

  //Aqui voce muda o ("#dadosDoUsario") para a div branca onde fica tudo

  let titulos = document.querySelector("h1")
  titulos.style.color = "white"
  //Muda o h1 da pagina


  let letrasP = document.querySelectorAll("p")
  for (var i = 0; i < letrasP.length; i++) {
    letrasP[i].style.color = 'white';
  }
  //muda os P esse for e para acessar todos os p que estão na pagina se não usar so altera um p

  //Voce pode usar para qualquer elemento que tenha mais de uma vez  

  let divlogin = document.querySelector("#LoginEntra")
  divlogin.style.background = "black"
//muda a cor da caixa do login//

tema = document.querySelector("#tema")
tema.style.background = "black"
//muda a cor do botão do tema para preto//


  email = document.querySelector("#email")
  email.style.color = "white"
  email = document.querySelector("#email")
  email.style.background = "black"
  //muda a cor do input para preto  e da letra para branco //

  senha = document.querySelector("#senha")
  senha.style.color = "senha"
  senha = document.querySelector("#senha")
  senha.style.background = "black"
  //muda a cor do input para preto  e da letra para branco //
}