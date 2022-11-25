let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        //window.alert('Tudo OK')
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p> O ${maior} é o maior numero.</p>`
        res.innerHTML += `<p> O ${menor} é o menor numero.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}`
        res.innerHTML += `<p> A media dos valores digitados é ${media}</p>`
    }
}























/*function adicionar() {
    let num = document.getElementById('num')
    let add = document.getElementById('selnum')

    if (num.value > 100 || num.value < 0) {
        window.alert('Numero invalido')
    }else {
        //window.alert('Numero adicionado')
        //add.innerHTML= `Numero ${num} Adicionado`
        let n = Number(num.value)
        let item = document.createElement('option')
        item.text(`${n}`)
        add.appendChild(item)
    }

}
//function analisar() {}*/