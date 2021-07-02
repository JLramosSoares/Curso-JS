function contar(){
    var txti = document.querySelector('input#txti')
    var txtf = document.querySelector('input#txtf')
    var txtp = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if (txti.value.length == 0 || txtf.value.lenght == 0 || txtp.value.lenght == 0) {
        window.alert("[ERRO] Faltam Dados!")
    } else{

        res.innerHTML = 'Contando: '

        var starter = Number(txti.value)
        var end = Number(txtf.value)
        var next = Number(txtp.value)

        if (next <= 0) {
            alert('Passo Inválido! Considerando passo um.')
            next = 1
        }

        if (starter < end){
            //Contagem crescente
            for(let c = starter; c <= end; c += next){
                res.innerHTML += `${c} \u{2714}`
            }
        } else if (starter > end){
            //Contagem regresiva
            for(let c = starter; c >= end; c -= next){
                res.innerHTML += `${c} \u{2714}`
            }
        }

        res.innerHTML += `\u{1f3c1}`

    }
}

