function validityField() {
    function teste(message) {
        if(message) {
            console.log(message)
        }else{
            console.log("sem mensagem")
        }
    }

    let validacao = false

    return {validacao, teste}
}

const { validacao, teste} = validityField()
if(validacao) {
    teste("Deu erro parça")
}