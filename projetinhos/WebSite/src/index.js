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
                <h1>Sum of two lowest positive integers</h1>
            </Article>
            <JavaScriptAside/>
        </main>
    )
}

function Article(props) {
    return(
        <article>
            {props.children}
            <p>
                Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
            </p>
            <p>
                For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
            </p>

            <p>
                Other example: [10, 343445353, 3453445, 3453545353453] should return 3453455.
            </p>
        </article>
    )
}

function JavaScriptAside() {
    const code = 
`function SumTwoNumbersPositive(array) {

   if (array.length >= 4) {

       if (array.filter(p => p > -1 && p === parseInt(p)).length === array.length) {

           const arrayOrdered = array.sort((a, b) => {
               if (a > b) return 1
               if (a < b) return -1
               if (a === b) return 0
           })

            return arrayOrdered[0] + arrayOrdered[1]
       }

       throw new Error('Floats numbers or numbers non-positive in the array')
  }

  throw new Error('Array with less of four positions.')
}

console.log(SumTwoNumbersPositive([992, 28, 66, 87 , 5 ,80 ,9 ,34]))`
    return (
        <aside>
            <h2>Código do desafio resolvido</h2>

            <div>
                <pre>
    
                    <code>{code}</code>
    
                </pre>
                
            </div>
            <AsideButton/>
        </aside>
    )
}

function AsideButton() {
    return (
        <div id="buttons-aside">
            <a href="./teste-o-codigo/index.html" rel="" target="_blank">
                    <button>Testar o código</button>
            </a>

            <button>Copiar &#10066;</button>
        </div>
    )
}

ReactDOM.render(
    <AppComponent/>,
    document.getElementById('app')
)