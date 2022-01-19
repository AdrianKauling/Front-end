const test = React.createContext('valueCorrently')

function componentMain() {

    const [valueCorrently, setValue] = React.useState(0)

     

    const newValue = () => {
        setValue(valueCorrently + 1)
        console.log(valueCorrently)
    }

    return (
        <test.Provider value={valueCorrently}>
            <main>
                <filhoMain1 fNewValue = {newValue} />
                <filhoMain2 valueCount = {valueCorrently} />
            </main>
        </test.Provider>
    )
}

function filhoMain1(props) {
    return(
        <div>
            <componenteWithButton fNewValue={props.fNewValue}>
                <label >Incrementar: </label>
            </componenteWithButton>
        </div>
    )
}

function componenteWithButton(props) {
    return (        
    <React.Fragment>
        
        {props.children}
        <button type="button" onClick={props.fNewValue}>clique</button>
        
    </React.Fragment>)
}

function filhoMain2(props) {
    return(
        <div>
            <boxContagem valueCount = {props.valueCount}/>    
        </div>
    )
}

function boxContagem(props) {
    return(
        <test.Consumer>
            {
                (valueCorrently) =>(
                    <h2>Contagem: {valueCorrently}</h2>
                )
            }
        </test.Consumer>
    )
}

ReactDOM.render(
    <componentMain/>,
    document.querySelector('#app')
)