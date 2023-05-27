
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

function acaoTel(){

    let modal = document.querySelector('.modalTel')


    modal.style.display = 'block';
}

function fecharTel(){

    let modal = document.querySelector('.modalTel')


    modal.style.display = 'none';

}


function acaoSenha(){

    let modal = document.querySelector('.modalSenha')


    modal.style.display = 'block';
}

function fecharSenha(){

    let modal = document.querySelector('.modalSenha')


    modal.style.display = 'none';

}


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
  
  // Definir a exibição inicial dos elementos
  window.addEventListener('DOMContentLoaded', function() {
    let produto = document.querySelector('#produtos');
    let produtoComprado = document.querySelector('#produtoComprados');
  
    produto.style.display = 'block';
    produtoComprado.style.display = 'none';
  });
  
  // Adicionar evento de clique ao elemento #compraproduto
  let compraproduto = document.querySelector('#compraproduto');
  compraproduto.addEventListener('click', trocartela);



//  Neste exemplo, a função trocartela() é modificada para alternar a exibição dos elementos #produtos e #produtoComprados com base na exibição atual de #produtos. Se #produtos estiver sendo exibido (display igual a 'block'), #produtos será ocultado e #produtoComprados será exibido. Caso contrário, #produtos será exibido e #produtoComprados será ocultado.

// Além disso, usamos o evento DOMContentLoaded para garantir que a exibição inicial dos elementos seja definida corretamente quando a página é carregada. Definimos #produtos como block e #produtoComprados como none para atender aos requisitos iniciais.

// Finalmente, adicionamos um ouvinte de evento de clique ao elemento #compraproduto para chamar a função trocartela() sempre que ele for clicado.

// Dessa forma, ao carregar a página, #produtos será exibido e #produtoComprados estará oculto. Ao clicar em #compraproduto, ocorrerá a troca, onde #produtos será oculto e #produtoComprados será exibido. Subsequentemente, ao clicar novamente em #compraproduto, a exibição será alternada novamente.