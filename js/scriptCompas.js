
function mudarTema(){
    let produto = document.querySelectorAll(".produto")
    for (var i = 0; i < produto.length; i++) {
        produto[i].style.backgroundColor = "black";
    }
    let titulos = document.querySelectorAll("h3")
    for (var i = 0; i < titulos.length; i++) {
      titulos[i].style.color = 'white';
    }

    let titulos2 = document.querySelectorAll("h4")
    for (var i = 0; i < titulos2.length; i++) {
      titulos2[i].style.color = 'white';
    }

    let cabecalho = document.querySelector("header")
    cabecalho.style.backgroundColor = "black"
  
    let rodape = document.querySelector("footer")
    rodape.style.backgroundColor= "black"
  
    let fundo = document.querySelector("body")
    fundo.style.backgroundColor = "#262626"
  
  
    let letrasP = document.querySelectorAll("p")
    for (var i = 0; i < letrasP.length; i++) {
      letrasP[i].style.color = "white";
    }
  
    let links = document.querySelectorAll(".nomes")
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "white";
    }
  
    let divcompra = document.querySelector("#campoTegs")
    divcompra.style.backgroundColor = "black"

    let botaoCor = document.querySelectorAll(".troca")
    for (var i = 0; i < botaoCor.length; i++) {
        botaoCor[i].style.color = "white";
    }

    let botao = document.querySelectorAll(".troca")
    for (var i = 0; i < botao.length; i++) {
        botao[i].style.backgroundColor = "black";
    }



  
  
  
}


// Definir a exibição inicial dos elementos
function trocarTela1(){
    let produto = document.querySelector('#produtos');
    let produtoComprado = document.querySelector('#produtoComprados');

    produto.style.display = 'block';
    produtoComprado.style.display = 'none';
};


function trocarTela2(){
    let produto = document.querySelector('#produtos');
    let produtoComprado = document.querySelector('#produtoComprados');

    produto.style.display = 'none';
    produtoComprado.style.display = 'block';
};



