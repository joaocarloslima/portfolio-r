console.log("calcular...")

// manipulação do DOM

// let = local
// var = global
// const = constante



document.querySelector("#qtde").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("#prototipo_sim").addEventListener("change", calcular)
document.querySelector("#prototipo_nao").addEventListener("change", calcular)

function calcular(){
    const qtde = document.querySelector("#qtde").value
    let preco = qtde * 1000

    const tipo = document.querySelector("#tipo").value
    if (tipo == 2) preco += 1000

    const temLayout = document.querySelector("#prototipo_sim").checked
    if (temLayout) preco *= 1.1
    
    document.querySelector("#orcamento").innerText = "R$ " + preco.toFixed(2)
}
