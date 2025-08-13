let numero = Number(prompt("Digite um número de 1 a 10:"));
let escolha = prompt("Agora escolha Par ou Ímpar:");

let botao = document.getElementById("botao")

botao.addEventListener("click", function(){

    let num = Math.floor(Math.random() * 10) + 1

    let resultado = num + numero

    if(resultado % 2 === 0 && escolha === "Par" || resultado % 2 === 1 && escolha === "Ímpar"){
         alert("Você ganhou, o resultado foi: " + resultado)
    }

    else{
         alert("Você perdeu, o resultado foi: " + resultado)
    }

})



