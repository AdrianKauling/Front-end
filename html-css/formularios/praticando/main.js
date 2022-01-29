const fields = document.querySelectorAll("[required]")

function validityField(field){

    function verifyError() {
        let FoundError = false

        for(let error in field.validity){

            if(field.validity[error] && !field.validity.valid){
                FoundError = error
            }
        }
        return FoundError
    }

    function customMessage(error) {
        const message = {
            text: {
                valueMissing:"Por favor, preencha este campo."
            },
            email: {
                valueMissing: "Este campo é obrigatório.",
                typeMismatch: "Preencha com um email válido."
            }

        }

        return message[field.type][error]
    }

    function setCustomMessage(message) {

        const span = field.parentNode.querySelector('span.error')

        if(message) {
            span.classList.add('active')
            span.innerText = message
        }else{
            span.classList.remove('active')
            span.innerText = ""
        }
    }

    return {verifyError, setCustomMessage, customMessage}
}



function valided(event) {

    const field = event.target

    const {verifyError, setCustomMessage, customMessage} = validityField(field)
    const error = verifyError()

    if(error) {

        setCustomMessage(customMessage(error))
    }else{
        setCustomMessage()
    }
}

for (field of fields) {
    field.addEventListener("invalid", event => {
        event.preventDefault()
        valided(event)
    })
    field.addEventListener("blur", valided)
}




document.querySelector("form").addEventListener("submit", event => {
    console.log('Formulario enviado')
    event.preventDefault()
})