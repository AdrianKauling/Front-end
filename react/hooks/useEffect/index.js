function AppComponent() {

    const [counter,setCounter] = React.useState(0)

    function somaUm () {
        setCounter( prevState => prevState + 1)
    }    

    function tiraUm () {
        setCounter( prevState => prevState - 1)
    }    

    React.useEffect(
        () => {

            return (console.log('useEffect rodou!'))
        },
        [counter]
    )

    return (
        <React.Fragment>
            <h1>{counter}</h1>
            <button onClick = {somaUm }>bota</button>
            <button onClick = {tiraUm}>tira</button>
        </React.Fragment>
    )
}


ReactDOM.render(
    <AppComponent/>,
    document.getElementById('app')
)