const {useReducer} = React

let initialValue = 0

function whenComponentRenderFirstTime() {
    console.log('Component render than first time')

    return initialValue
}

function reducer(state, action){


    switch (action.type){
        case 'addOne': 
            return state += 1
        ;
        case 'removeOne':
            return state -= 1

        default:
            return state
    }
}

function AppComponent() {

    const [state, dispatch] = useReducer(reducer,initialValue,whenComponentRenderFirstTime)

    function somaUm () {
        dispatch({type: 'addOne'})
    }
    function tiraUm () {
        dispatch({type: 'removeOne'})
    }


    return (
        <React.Fragment>
            <h1>{state}</h1>
            <button onClick = {somaUm}>bota</button>
            <button onClick = {tiraUm}>tira</button>
        </React.Fragment>
    )
}


ReactDOM.render(
    <AppComponent/>,
    document.getElementById('app')
)