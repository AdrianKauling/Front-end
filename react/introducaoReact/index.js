const nomeContext = React.createContext('nome')

        function Componente2() {
            const meuNome = 'Adrian'
           
            return (
                React.createElement(nomeContext.Provider, { value: meuNome },
                    React.createElement('div', { className: "componente2" },
                        React.createElement(Componente3, { nome: meuNome})
                    )   
                )


            )
        }

        function Componente3() {


            return (
                
                React.createElement(nomeContext.Consumer, null,
                    (nome, idade) => (

                        React.createElement('div', { className: 'componente3' },
                            React.createElement('p', null, nome, idade)
                        )
                    )
                )

            )
        }



        function MainComponente() {

            return (
                React.createElement('div', { className: 'mainComponent' },
                    React.createElement(Componente2)
                ))
        }

        ReactDOM.render(
            <MainComponente/>,

            document.getElementById('app')
        )