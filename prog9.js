// PSI para KGF

let resposta = document.getElementById('resposta')

function principal(){
    let psi = Number(document.getElementById('psi').value)
    let kgf = 703.07

    let calculo = (psi * kgf)

    console.log(`A conversão de PSI para KFG é: ${calculo.toFixed(2)}`)

    resposta.innerHTML = ``
    resposta.innerHTML += `A conversão de PSI para KGF é: ${calculo.toFixed(2)}`
}

// °F = (°C × 1,8) + 32

let resul = document.getElementById('resul')

function basic(){

    let faren = Number(document.getElementById('faren').value)
    let celsi = faren * 1.8 + 32

    resul.innerHTML = ``
    resul.innerHTML += `A conversão de Celsius para Fahrenheit é: ${celsi.toFixed(2)}ºC`

}