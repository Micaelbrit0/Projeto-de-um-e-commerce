function mudarTema(){
    let cabecalho = document.querySelector("header")
    cabecalho.style.backgroundColor = "black"
  
    let rodape = document.querySelector("footer")
    rodape.style.backgroundColor= "black"
  
    let fundo = document.querySelector("#painel")
    fundo.style.backgroundColor = "#262626"
  
    let divproduto = document.querySelector("#div_cate")
    divproduto.style.backgroundColor = "black"

    let categoria = document.querySelector(".categorias")
    categoria.style.backgroundColor = "black"

    let destaque = document.querySelector("#destaques")
    destaque.style.backgroundColor = "#262626"

    let letraproduto = document.querySelector("#BoxNomeProduto")
    letraproduto.style.backgroundColor = "black"

    let nomeproduto = document.querySelector("#h1des")
    nomeproduto.style.color = "white"
  
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
  
    let botao = document.querySelectorAll(".produto")
    for (var i = 0; i < botao.length; i++) {
        botao[i].style.backgroundColor = "black";
    }
  
    let botao2 = document.querySelectorAll("h3")
    for (var i = 0; i < botao2.length; i++) {
        botao2[i].style.color = "white";
    }

    let botao3 = document.querySelectorAll("h4")
    for (var i = 0; i < botao3.length; i++) {
        botao3[i].style.color = "white";
    }
  }