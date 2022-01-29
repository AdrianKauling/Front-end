const fields = document.querySelectorAll('[required]')
console.log(fields)

for(const field of fields) {
    field.addEventListener('invalid', 
        event  => {
            const correntField = event.target
            console.log(correntField.validity.customError)
            const invalidityConfirmed = () => {
                let FoundError = false

                for(error in correntField) {
                    if(error != "customError" && correntField[error]){
                        FoundError = true
                    }
                }

                return FoundError
            }

            invalidityConfirmed()
            ? correntField.setCustomValidity('teste')
            : correntField.setCustomvalidity('')
            console.log(correntField.validity.customError)
        }
    )
}



document.getElementById('form-login').addEventListener("submit", 
    event => {
        console.log('Formulário passou')
        event.preventDefault()
    }
)