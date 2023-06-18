var buttons = document.getElementsByClassName("opcaodaInfo");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}

//Quando um botão é clicado, a função de retorno de chamada é acionada e adiciona ou remove a classe "active" do botão, alterando assim a cor de fundo e a cor do texto.


function mudarTema(){
  let cabecalho = document.querySelector("header")
  cabecalho.style.backgroundColor = "black"

  let rodape = document.querySelector("footer")
  rodape.style.backgroundColor= "black"

  let fundo = document.querySelector("body")
  fundo.style.backgroundColor = "#262626"

  let divproduto = document.querySelector("#container")
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

  let fundoinf = document.querySelectorAll(".opcaodaInfo")
  for (var i = 0; i < fundoinf.length; i++) {
    fundoinf[i].style.backgroundColor = 'black';
  }

  let colorinf = document.querySelectorAll(".opcaodaInfo")
  for (var i = 0; i < colorinf.length; i++) {
    colorinf[i].style.color = 'white';
  }

  let inptFrete = document.querySelector("#calFrete")
  inptFrete.style.backgroundColor = "black"

  let inptFreteLetra = document.querySelector("#calFrete")
  inptFreteLetra.style.color = "white"


  let letrasp = document.querySelectorAll("p")
  for (var i = 0; i < letrasp.length; i++) {
    letrasp[i].style.color = 'white';
  }
  let preco = document.querySelector("#boxPreco")
  preco.style.backgroundColor = "#262626"

  let descicao = document.querySelector("#descricao")
  descicao.style.backgroundColor= "black"

  let comentarios = document.querySelector("#comentarios")
  comentarios.style.backgroundColor= "black"

  let botao = document.querySelector("#comentarios")
  botao.style.backgroundColor= "black"


}

