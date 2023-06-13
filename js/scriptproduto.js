var buttons = document.getElementsByClassName("opcaodaInfo");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}

//Quando um botão é clicado, a função de retorno de chamada é acionada e adiciona ou remove a classe "active" do botão, alterando assim a cor de fundo e a cor do texto.

// JS de mostruario

let btnAbri = document.querySelector("#abriButton");

btnAbri.addEventListener("click", abriNav);
function abriNav(){
  document.getElementById("fecharMenu").style.width = "100%";
  
}
let btnfechar = document.querySelector("#fechar");
btnfechar.addEventListener("click", fechaNav);
function fechaNav(){
  document.getElementById("fecharMenu").style.width = "0%";

}
