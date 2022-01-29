const FieldsWithRequired = document.querySelectorAll("[required]")

function validityField(field) {

    function getTypeError() {
        let foundError = false

        for (let error in field.validity) {
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }

        return foundError
    }

    function messageCustom(error) {
        const message = {
            text: {
                valueMissing: "Por favor, preenchar esse campo."
            },
            email: {
                valueMissing: "Este campo é obrigatório.",
                typeMismatch: "Por favor, preencha com um email válido."
            },
            password: {
                valueMissing: "O cadastro de uma senha é obrigatório."
            }
        }
        return message[field.type][error]
    }

    return () => {

        const foundError = getTypeError()
        const spanError = field.parentNode.getElementsByClassName('error')[0]

        if (foundError) {
            spanError.classList.add("disparou")
            spanError.innerText = messageCustom(foundError)
        } else {
            spanError.classList.remove("disparou")
            spanError.innerText = ""
        }
    }

}


function validity(event) {
    const field = event.target

    const validated = validityField(field)
    validated()

}

for (Field of FieldsWithRequired) {
    Field.addEventListener("invalid", event => {
        event.preventDefault()
        validity(event)
    })

    Field.addEventListener("blur", validity)
}


document.getElementById("form-login").addEventListener("submit", event => {
    event.preventDefault()
    console.log("O formulario seria enviado")
})