const {createContext, useState, useEffect, useContext} = React 

const counterContext = createContext('counter')

function AppComponent() {

    const [counter,setCounter] = useState(0)

    function somaUm () {
        setCounter( prevState => prevState + 1)
    }    

    function tiraUm () {
        setCounter( prevState => prevState - 1)
    }    
    
    // useEffect(
    //     () => {

    //         return (console.log('useEffect rodou!'))
    //     },[somaUm]
    // )

    return (
        <counterContext.Provider value={{counter}}>

            <Myh1/>
            <button onClick = {somaUm }>bota</button>
            <button onClick = {tiraUm}>tira</button>

        </counterContext.Provider>
    )
}

function Myh1() {

    const counter = useContext(counterContext)

    useEffect(() => {
        return () => console.log('counter mudou de estado')
    }, [counter.counter])
    
    
    return (
        <h1>{counter.counter}</h1>
    )
}


ReactDOM.render(
    <AppComponent/>,
    document.getElementById('app')
)