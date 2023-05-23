let aux = 0

let soma = 0

while (aux <= 100) {
    console.log(aux)
    soma += aux
    aux++
}
document.getElementById('resultado').innerHTML = `<p> <strong>Resultado da Soma: </strong> ${soma} </p>`

