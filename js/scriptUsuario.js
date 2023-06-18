//Tela do Perfil

// Assim que se click no butão o codigo css muda de none para block, assim a janela aparece
function acao(){

    let modal = document.querySelector('#modalEmail')


    modal.style.display = 'block';
}

// Assim que se click no butão o x css muda de block para none, assim a janela some
function fechar(){

    let modal = document.querySelector('#modalEmail')


    modal.style.display = 'none';

}

function acaoTel(){

    let modal = document.querySelector('#modalTel')


    modal.style.display = 'block';
}

function fecharTel(){

    let modal = document.querySelector('#modalTel')


    modal.style.display = 'none';

}


function acaoSenha(){

    let modal = document.querySelector('#modalSenha')


    modal.style.display = 'block';
}

function fecharSenha(){

    let modal = document.querySelector('#modalSenha')


    modal.style.display = 'none';

}


//Tela de Favoritos

function trocarTela() {
    let produto = document.querySelector('#produtos');
    let produtoComprado = document.querySelector('#produtoComprados');
  
    if (produto.style.display === 'block') {
      produto.style.display = 'none';
      produtoComprado.style.display = 'block';
    } else {
      produto.style.display = 'block';
      produtoComprado.style.display = 'none';
    }
}
  


function mudarTema(){
  let cabecalho = document.querySelector("header")
  cabecalho.style.backgroundColor = "black"

  let rodape = document.querySelector("footer")
  rodape.style.backgroundColor= "black"

  let fundo = document.querySelector("body")
  fundo.style.backgroundColor = "#262626"

  let divproduto = document.querySelector("#dadosDoUsario")
  divproduto.style.backgroundColor = "black"

  let titulos = document.querySelector("h1")
  titulos.style.color = "white"

  let titulos2 = document.querySelectorAll("h2")
  for (var i = 0; i < titulos2.length; i++) {
    titulos2[i].style.color = 'white';
  }

  let letras = document.querySelectorAll("label")
  for (var i = 0; i < letras.length; i++) {
      letras[i].style.color = 'white';
  }

  let letrasP = document.querySelectorAll("p")
  for (var i = 0; i < letrasP.length; i++) {
    letrasP[i].style.color = 'white';
  }

  let links = document.querySelectorAll(".nomes")
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = 'white';
  }

  let janelaModal = document.querySelectorAll(".modal")
  for (var i = 0; i <  janelaModal.length; i++) {
    janelaModal[i].style.backgroundColor = "black"
  }

  let corInput = document.querySelectorAll(".inputDados")
  for (var i = 0; i < corInput.length; i++) {
    corInput[i].style.backgroundColor = "black"

  }
  let corBordaInput = document.querySelectorAll(".inputDados")
  for (var i = 0; i < corBordaInput.length; i++) {
    corInput[i].style.border = "1px solid white"
  }

  let botao = document.querySelectorAll(".trocar")
  for (var i = 0; i < botao.length; i++) {
      botao[i].style.backgroundColor = "black";
  }

}





