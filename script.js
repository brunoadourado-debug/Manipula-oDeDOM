function adicionar(){
    document.querySelector("#resultado").textContent = `Resultado: ${parseInt(document.querySelector("#primeiro").value) + parseInt(document.querySelector("#segundo").value)}`
}

function subtrair(){
    document.querySelector("#resultado").textContent = `Resultado: ${parseInt(document.querySelector("#primeiro").value) - parseInt(document.querySelector("#segundo").value)}`
}

function multiplicar(){
    document.querySelector("#resultado").textContent = `Resultado: ${parseInt(document.querySelector("#primeiro").value) * parseInt(document.querySelector("#segundo").value)}`
}

function dividir(){
    document.querySelector("#resultado").textContent = `Resultado: ${parseInt(document.querySelector("#primeiro").value) / parseInt(document.querySelector("#segundo").value)}`
}
