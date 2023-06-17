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