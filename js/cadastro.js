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

  let titulos = document.querySelector("h1")
  titulos.style.color = "white"
  //Muda o h1 da pagina

  let titulos2 = document.querySelectorAll("h2")
  for (var i = 0; i < titulos2.length; i++) {
    titulos2[i].style.color = 'white';
  }

  let letrasP = document.querySelectorAll("p")
  for (var i = 0; i < letrasP.length; i++)
    letrasP[i].style.color = 'white';
  //muda os P esse for e para acessar todos os p que estão na pagina se não usar so altera um p
  //Voce pode usar para qualquer elemento que tenha mais de uma vez 

  
  tema = document.querySelector("#tema")
  tema.style.background = "black"
  //muda a cor do botão do tema para preto//

  let divCadastro = document.querySelector("#Cadastro")
  divCadastro.style.background = "black"

  // muda a cor da caixa do cadastro

  let letras = document.querySelectorAll("label")
  for (var i = 0; i < letras.length; i++) {
      letras[i].style.color = 'white';
  }


let corInput = document.querySelectorAll(".inputDados")
  for (var i = 0; i < corInput.length; i++) {
    corInput[i].style.backgroundColor = "black"

  }
  
  let corInputDentro = document.querySelectorAll(".inputDados")
  for (var i = 0; i < corInputDentro.length; i++) {
    corInputDentro[i].style.color = "white"

  }  

  // muda a cor da caixa do cadastro

  //muda a cor dos inputs para preto  e das letras para branco 

  opcoes = document.querySelector("#opcoes")
  opcoes.style.color = "white"
  opcoes = document.querySelector("#opcoes")
  opcoes.style.background = "black"
  //muda a cor dos inputs para preto  e das letras para branco 



 let links = document.querySelectorAll(".nomes")
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = 'white';
  }




}



