let nomePrato ="";
let valorPrato = 0;

let nomeBebida="";
let valorBebida = 0;

let nomeSobremesa="";
let valorSobremesa = 0;

let pratoReal = "";
let bebidaReal = "";
let sobremesaReal ="";

let valorTotal = 0;
let resultado = 0;

function pratoSelecionado(botao){
botaoPrato = botao.querySelector('h2');
nomePrato = botaoPrato.className;
const botaoAnterior = document.querySelector(".pratos .selecionado");

if(botaoAnterior !== null){
botaoAnterior.classList.remove("selecionado");
valorPrato = 0;
}

if(nomePrato == "frango"){
  pratoReal = "Frangão Maneirão";
  valorPrato = 14.9;
}else if(nomePrato == "carne"){
  pratoReal = "Bife Show de Bola";
  valorPrato = 16.9;
}else if(nomePrato == "calabresa"){
  pratoReal = "Calabresa Acebeleza";
  valorPrato =12,9;
}

botao.classList.add("selecionado");
console.log(valorPrato)
console.log(nomePrato);
return nomePrato;
}

function bebidaSelecionado(botao){
  botaoBebida = botao.querySelector('h2');
  nomeBebida = botaoBebida.className;
  const botaoAnterior = document.querySelector(".bebidas .selecionado");
  
  if(botaoAnterior !== null){
  botaoAnterior.classList.remove("selecionado");
  valorBebida = 0;
  }

  if(nomeBebida == "coca"){
    bebidaReal = "Coca-Cola";
    valorBebida = 6.90;
  }else if(nomeBebida == "fanta"){
    bebidaReal = "Fanta Laranja";
    valorBebida = 7.50;
  }else if(nomeBebida == "suco"){
    bebidaReal = "Suco de Laranja";
    valorBebida = 5.50;
  }
  
  
  valorNumerico = valorBebida;
  botao.classList.add("selecionado");
  console.log(valorBebida);
  console.log(nomeBebida);
  return nomeBebida;

}

function sobremesaSelecionado(botao){
  botaoSobremesa = botao.querySelector('h2');
  nomeSobremesa = botaoSobremesa.className;
    const botaoAnterior = document.querySelector(".sobremesas .selecionado");
    
    if(botaoAnterior !== null){
    botaoAnterior.classList.remove("selecionado");
    valorSobremesa =0;
    }
    
  if(nomeSobremesa == "brownie"){
    sobremesaReal = "Brownie";
    valorSobremesa = 6.90;
  }else if(nomeSobremesa == "mousse"){
    sobremesaReal = "Mousse";
    valorSobremesa = 10.00;
  }else if(nomeSobremesa == "pudim"){
    sobremesaReal = "Pudim";
    valorSobremesa = 8.90;
  }
  
    valorNumerico = valorSobremesa;
    botao.classList.add("selecionado");
    console.log(valorSobremesa);
    console.log(nomeSobremesa);
    return nomeSobremesa;

  }

function confirmarPedido(){
  if(nomePrato !== "" && nomeBebida !== "" && nomeSobremesa !== ""){
    document.querySelector(".botaoFinalizar").classList.add("escondido");
    document.querySelector(".botaoFinalizarPronto").classList.remove("escondido");
  }
}


function concluirPedido(){
 valorTotal = valorPrato + valorBebida + valorSobremesa;
 resultado = valorTotal.toFixed(2);

  document.querySelector(".main").classList.add("noClick");    
  document.querySelector(".finalizar").classList.remove("escondido");
  console.log(resultado);

  pratoFinal = document.querySelector('.finalizar h4:nth-child(2)');
  bebidaFinal = document.querySelector('.finalizar h4:nth-child(3)');
  sobremesaFinal = document.querySelector('.finalizar h4:nth-child(4)');
  totalFinal = document.querySelector('.finalizar h1:nth-child(5)');
  

  pratoFinal.innerHTML =  pratoReal + ": " + "R$" + valorPrato;
  bebidaFinal.innerHTML = bebidaReal + ": "  + "R$" + valorBebida;
  sobremesaFinal.innerHTML = sobremesaReal + ": "  + "R$" + valorSobremesa;
  totalFinal.innerHTML = "TOTAL" + ": "  + "R$" + resultado;
}

function cancelarPedido(){
  valorTotal = 0

  document.querySelector(".main").classList.remove("noClick");    
  document.querySelector(".finalizar").classList.add("escondido");
  console.log(valorTotal);
}

function enviarPedido(){
  let numero = 5521987862506;
  let mensagemWpp = `Olá, gostaria de fazer o pedido: \n - Prato: ${pratoReal} \n - Bebida: ${bebidaReal} \n - Sobremesa: ${sobremesaReal} \n Total: R$ ${resultado}`;
  let msgCodificada = encodeURIComponent(mensagemWpp);
  let url = `https://wa.me/${numero}?text=${msgCodificada}`;

  window.open(url, '_blank');


}