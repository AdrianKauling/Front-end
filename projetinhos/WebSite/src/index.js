function AppComponent(){
    return (
        <div>
            <Header1/>
            <Main/>
        </div>
    )
}

function Header1() {
    return (
        <header>
            <HeadersChildrens/>
        </header>
    )
}

function HeadersChildrens() {
    return (
        <React.Fragment>
           <div>
               <h1 className="header-texto">Desafio - CodeWars</h1>
               <p className="header-texto">Não é falta de café e nem tequila, é meu código que não compila</p>

           </div>
           <span id="pipe"></span>
           <div id="img">
            <img src="./images/alvo-60px.png" alt="Alvo"/>
           </div>
        </React.Fragment>
    )
}

function Main() {
    return (
        <main>
            <Article>
                <h1>Titulo do desafio</h1>
            </Article>
            <JavaScriptAside/>
        </main>
    )
}

function Article(props) {
    return(
        <article>
            {props.children}
            <p>Explicação do desafio </p>
        </article>
    )
}

function JavaScriptAside() {
    const code = `function findOutlier(integers){

    let par = 0
    let impar = 0

    for(let i = 0; i < integers.length; i++) {
        let imparOuPar = integers[i]%2 === 0? 'par': 'impar'

        imparOuPar === 'par'? par += 1: impar += 1
    }

    if(par < impar) {
        const res = integers.filter((position) => position % 2 === 0)
        return res[0]
    }else {
        const res = integers.filter((position) => position % 2 !== 0)
        return res[0]
    }
        
}`
    return (
        <aside>
            <h2>Código do desafio resolvido</h2>

            <pre>
                <code>{code}</code>
            </pre>
        </aside>
    )
}

ReactDOM.render(
    <AppComponent/>,
    document.getElementById('app')
)