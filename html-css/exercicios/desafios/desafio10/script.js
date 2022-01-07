let controleLista = false


function gerarHorario() {
    const textHoras = document.getElementById('campoHoras')
    let horaGerada = String(gerarNumeroAleatorio(0,23))
    let minutosGerados = String(gerarNumeroAleatorio(0,59))

    if(horaGerada.length === 1) {
        horaGerada = '0' + horaGerada
    }

    if(minutosGerados.length === 1) {
        minutosGerados = '0' + minutosGerados
    }
    
    textHoras.innerText = `${horaGerada}:${minutosGerados}`
}



function gerarNumeroAleatorio( menorNumero, maiorNumero){

    return Math.floor(Math.random() * (maiorNumero - menorNumero + 1)) + menorNumero
}

// function listarTermos() {
//     const ListaDeTermos = document.getElementById('listaDeTermos')
//     controleLista = controleLista? false:true 

//     if(controleLista){
    
//     const ld = document.createElement('ld')

//     const DTeDD = `<dt>Wake Up</dt> <dd>É o verbo 'acordar'</dd>
//     <dt>Perguntando as horas</dt><dd>Could you tell me the time</dd>
//     <dt>Resposta 1</dt><dd>it's fifteen to ten pm</dd>
//     <dt>Resposta 2</dt><dd>It's a quater to ten pm</dd>
//     <dt>Resposta 3</dt><dd>It's nine forty-five</dd>
//     `
//     ld.innerHTML = DTeDD
//     ListaDeTermos.appendChild(ld)
// }else{
//     ListaDeTermos.innerHTML = ''
// }

// }