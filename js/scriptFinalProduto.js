function acao(){

    let modal = document.querySelector('#modal')

    modal.style.display = 'block'
}

// Assim que se click no butão o x css muda de block para none, assim a janela some
function fechar(){

    let modal = document.querySelector('#modal')

    modal.style.display = 'none'

}

// Funçao que altera a opç de entrega

let select = document.querySelector('.custom-select')
select.addEventListener('change', function() {
    // Obtendo a opção selecionada
    const opcaoSelecionada = select.value
    console.log('Opção selecionada:', opcaoSelecionada);

    if( opcaoSelecionada == "opcao1"){
        let opc1 = document.querySelector("#troca1")
        let opc2 = document.querySelector("#troca2")
        opc1.style.display = "block"
        opc2.style.display = "none"

    }else if(opcaoSelecionada == "opcao2"){
        let opc1 = document.querySelector("#troca1")
        let opc2 = document.querySelector("#troca2")
        opc1.style.display = "none"
        opc2.style.display = "block"

    }
})

function mudarTema(){

    let janelaModal = document.querySelectorAll("#modal")
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

    let div = document.querySelectorAll("#TipoDeEntrega")
    for (var i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = "black";
    
    }

    let divUm = document.querySelectorAll("#infDosProdutos")
    for (var i = 0; i < divUm.length; i++) {
        divUm[i].style.backgroundColor = "black";
    
    }

    let divDois = document.querySelectorAll("#totalCompra")
    for (var i = 0; i < divDois.length; i++) {
        divDois[i].style.backgroundColor = "black";
    
    }

    let tipo = document.querySelectorAll(".custom-select")
    for (var i = 0; i < tipo.length; i++) {
        tipo[i].style.backgroundColor = "black";
    
    }

    let tipo1 = document.querySelectorAll(".custom-select")
    for (var i = 0; i < tipo1.length; i++) {
        tipo1[i].style.color = "white";
    
    }

    let titulos = document.querySelectorAll("h3")
    for (var i = 0; i < titulos.length; i++) {
      titulos[i].style.color = 'white';
    }


    let titulos2 = document.querySelectorAll("h2")
    for (var i = 0; i < titulos2.length; i++) {
      titulos2[i].style.color = 'white';
    }

        

    let bt = document.querySelectorAll("#trocar")
    for (var i = 0; i < bt.length; i++) {
        bt[i].style.backgroundColor = 'black';
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



