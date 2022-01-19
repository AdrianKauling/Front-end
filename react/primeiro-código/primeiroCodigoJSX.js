const propNome = React.createContext('nome')

function meuComponente1() {

    const nome = 'Adrian Kauling dos Santos'

    return (
        <propNome.Provider value={nome}>
            <meuComponente2/>
            <div className="Filhao">
                Dale
            </div>
        </propNome.Provider>
    )
}

function meuComponente2() {
    
    return(
        <div className="componente-2">
            <meuComponente3/>
        </div>
    )
}


function meuComponente3() {

    return (
        <div className="componente-3">
            <meuComponente4/>
        </div>
    )
}


function meuComponente4() {

    return(
        <propNome.Consumer>
            {
                nome => (
                    <h1 className="componente-4">
                        Sou filho de geralll, aeee karaii!! Alias meu nome e{nome}
                    </h1>
                )
            }
        </propNome.Consumer>
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