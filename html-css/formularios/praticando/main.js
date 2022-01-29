const fields = document.querySelectorAll("[required]")

function customMessageValid(event) {
    const field = event.target

    event.preventDefault()

    function verifyError() {
        let FoundError = false

        for(let error in field.validity){

            if(field.validity[error]){
                FoundError = true
                console.log(error)
            }

        }
        return FoundError
    }

    const error = verifyError()

      

}

for (field of fields) {
    field.addEventListener("invalid", customMessageValid)
}









document.querySelector("form").addEventListener("submit", event => {
    console.log('Formulario seria enviado')
    event.preventDefault()
})