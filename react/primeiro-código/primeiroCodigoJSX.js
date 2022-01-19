function meuComponente1() {

    const nome = 'Adrian Kauling dos Santos'

    let [idade,setIdade] = React.useState(17)

    setTimeout(() => {
        setIdade(18)
    }, 1000)

    return (
        <meuComponente2>
            <meuComponente3>
                <meuComponente4  idade={idade} nome={nome}/>
                <p>{idade}</p>
            </meuComponente3>
        </meuComponente2>
    )
}

function meuComponente2(props) {
    
    return(
        <div className="componente-2">
            {props.children}
        </div>
    )
}


function meuComponente3(props) {

    return (
        <div className="componente-3">
            {props.children}
        </div>
    )
}


function meuComponente4(props) {

    return(
        <div>
            
            <h1 className="componente-4">
                Sou filho de geralll, aeee karaii!! Alias meu nome e {props.nome}
            </h1>

            <p>Tenho {props.idade} anos.</p>
            
        </div>
                
    )
}

function meuComponente() {

    return(
        <main className="meuComponente">
            <meuComponente1/>
        </main>
    )
}

ReactDOM.render(
    <meuComponente/>,
    document.getElementById('app')
)