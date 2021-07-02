function calcular(){
    var numbertxt = window.document.querySelector('input#numbertxt') 
    var tabuada = window.document.querySelector('select#seltab') 
    var produto;

    if (numbertxt.value.length == 0){
        alert("Por favor, digite um número.")
    } else {
        var number = Number(numbertxt.value)
        tabuada.innerHTML = ''
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            produto = number * c
            item.text = `${number} X ${c} = ${produto}`
            tabuada.appendChild(item)
        }
    }
}