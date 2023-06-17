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

