let increaseBtn = document.querySelector("#increaseBtn");
let quantityInput = document.querySelector("#quantityInput");
let decreaseBtn = document.querySelector("#decreaseBtn");
// no codigo acima foi capituradoos dois butões e um input no qual serão responsaveis por aumentar ou diminuir a quantidade do produto.
increaseBtn.addEventListener("click",function(){
    quantityInput.value = parseInt(quantityInput.value)+1;
});
decreaseBtn.addEventListener("click",function(){
    quantityInput.value = quantityInput.value > 1 ? parseInt(quantityInput.value)-1 : 1;
});
//no codigo acima foi adicionado uma função no evento click do butão que foi capturado como 'increaseBtn' que quando for clicado será responsável por aumentar o valor que estar dendro do input que foi capturado como 'quantityInput' somando + 1 a cada vez que for clicado em seguida foi adicionada outra função também no evento click porém em outro butão que foi capturado como 'decreaseBtn' que quando clicado vai ocorer uma verificação atravez dos operadores condicionais '?',':', que vai verificar se a condição é maior que 1, caso for, ocorera um decremento de - 1 do valor atual, caso contrario, o valor será mantido igual a um, uma vez que o valor da quantidade atual do produto não pode ser nulo ou negativo.

function mudarTema(){
  let sesum = document.querySelector("#section_um")
  sesum.style.backgroundColor = "black"
// Aqui muda a cor da section um 

  let sesdois = document.querySelector("#section_dois")
  sesdois.style.backgroundColor = "black"
// Aqui  muda a cor da section dois

let nomeproduto = document.querySelector("#nome_produto")
nomeproduto.style.color = "white"
// Aqui muda cor do nome dopr oduto

  let descricao = document.querySelector("#nome_produto2")
  descricao.style.color = "white"
// Aqui muda a cor do nome descrição

let preco = document.querySelector("#preço")
preco.style.color = "white"
// Aqui muda a cor do nome preço

  let sestres = document.querySelector("#section_tres")
  sestres.style.backgroundColor = "black"
// Aqui  muda a cor da section três

  let cupon = document.querySelector("#nome_cupon")
  cupon.style.color = "white"
// muda cor nome cupon
  let cupon2 = document.querySelector("#inserir_codigo")
  cupon2.style.color = "white"
//muda cor do nome inserir codigo
  let selecione = document.querySelector("#Selecione_tudo")
  selecione.style.color = "white"
//muda a cor do nome selecionar tudo
  let apagar = document.querySelector("#Apagar")
  apagar.style.color = "white"
//muda a cor do nome apagar
  let total = document.querySelector("#total")
  total.style.color = "white"
//muda a cor do nome total itens
  let rs = document.querySelector("#rs")
  rs.style.color = "white"
//muda a cor do nome r$

  let buton = document.querySelector("#comprar")
  buton.style.backgroundColor = "#262626"
//muda a cor do nome do butao comprar

  let cabecalho = document.querySelector("header")
  cabecalho.style.backgroundColor = "black"
  //Muda o cabeçalho
  
    let rodape = document.querySelector("footer")
    rodape.style.backgroundColor= "black"
  //Muda o rodapé
  
    let fundo = document.querySelector("body")
    fundo.style.backgroundColor = "#262626"
  //muda o body para aquele cinza mais claro
  
    let divproduto = document.querySelector("#div_produto")
    divproduto.style.backgroundColor = "black"
  //Aqui voce muda o ("#dadosDoUsario") para a div branca onde fica tudo

   
    let titulos = document.querySelector("h1")
    titulos.style.color = "white"
  //Muda o h1 da pagina

    let letrasP = document.querySelectorAll("p")
    for (var i = 0; i < letrasP.length; i++) {
      letrasP[i].style.color = 'white';
    }
    }