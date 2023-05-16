// Assim que se click no butão o codigo css muda de none para block, assim a janela aparece
function acao(){

    let modal = document.querySelector('.modal')


    modal.style.display = 'block';
}

// Assim que se click no butão o x css muda de block para none, assim a janela some
function fechar(){

    let modal = document.querySelector('.modal')


    modal.style.display = 'none';

}