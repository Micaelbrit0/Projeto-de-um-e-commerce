barra.oninput= showbarraValue;
function showbarraValue() {
    valorpreco.innerText = this.value;
}

function mudarTema(){
    let cabecalho = document.querySelector("header")
    cabecalho.style.backgroundColor = "black"
  
    let rodape = document.querySelector("footer")
    rodape.style.backgroundColor= "black"
  
    let fundo = document.querySelector("body")
    fundo.style.backgroundColor = "#262626"
  
    let divproduto = document.querySelector("#BoxNomeProduto")
    divproduto.style.backgroundColor = "black"

    let divCategoria = document.querySelector("#BoxCategoria")
    divCategoria.style.backgroundColor = "black"

    let divPreco = document.querySelector("#BoxPreço")
    divPreco.style.backgroundColor = "black"

    let produto = document.querySelectorAll(".produto")
    for (var i = 0; i < produto.length; i++) {
        produto[i].style.backgroundColor = "black";
    }

    let letrasP = document.querySelectorAll("p")
    for (var i = 0; i < letrasP.length; i++) {
      letrasP[i].style.color = "white";
    }

    let titulos1 = document.querySelector("h1")
    titulos1.style.color = "white"

    let titulos = document.querySelectorAll("h3")
    for (var i = 0; i < titulos.length; i++) {
      titulos[i].style.color = 'white';
    }

    let titulos2 = document.querySelectorAll("h4")
    for (var i = 0; i < titulos2.length; i++) {
      titulos2[i].style.color = 'white';
    }

    let letras = document.querySelectorAll("label")
    for (var i = 0; i < letras.length; i++) {
        letras[i].style.color = 'white';
    }
    
    
  
  
}
  