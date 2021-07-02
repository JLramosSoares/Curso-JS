function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length === 0 || fano > ano){
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var verify = window.document.getElementById('verify')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criança-homem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criança-mulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign  = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}