let escolhaUsuario = null;

document.getElementById("botao1").addEventListener("click", () => {
    escolhaUsuario = "pedra";
    alert("Você escolheu: Pedra");
});

document.getElementById("botao2").addEventListener("click", () => {
    escolhaUsuario = "papel";
    alert("Você escolheu: Papel");
});

document.getElementById("botao3").addEventListener("click", () => {
    escolhaUsuario = "tesoura";
    alert("Você escolheu: Tesoura");
});

document.getElementById("botaoresultado").addEventListener("click", () => {
    if (!escolhaUsuario) {
        alert("Escolha uma opção antes de ver o resultado!");
        return;
    }

    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "Você perdeu!";
    }

    alert(`Você escolheu: ${escolhaUsuario}\nComputador escolheu: ${escolhaComputador}\n${resultado}`);
});
