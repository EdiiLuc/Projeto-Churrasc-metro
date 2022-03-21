let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

document.getElementById("buttonId").addEventListener("click", calcular);

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let gramas = CarnePP(duracao);
    let ml = CervejaPP(duracao);
    let ml1 = RefrigerantePP(duracao);

    let qdtTotalCarne = gramas * adultos + (gramas / 2 * criancas);
    let qdtTotalCerveja = ml * adultos;
    let qdtTotalRefrigerante = ml1 * adultos + (ml1 / 2 * criancas)

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefrigerante / 2000)} Garrafas de 2L de Refrigerante/Água</p>`
}

function CarnePP(duracao) {
    return duracao >= 6 ? 650 : 400
   }

function CervejaPP(duracao) {
    return duracao >= 6 ? 2000 : 1200
}

function RefrigerantePP(duracao) {
    return duracao >= 6 ? 1500 : 1000;
}