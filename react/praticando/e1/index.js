const {useReducer, useState} = React

function reducer(state, action) {

    const valueBtn = document.querySelector('#btn').value
    switch(action.type) {
        case 'add':

            state.push(parseInt(valueBtn))
            return state

        case 'minus': 
            return state -= 1 
    }   
}

function MainComponent() {

    const [state, dispatch] = useReducer(reducer, [0])   
    console.log(state)


    function setStateAdd() {
        return dispatch({type:'add'})
    }


    function setStateMinus() {
        countClicks()
        return dispatch({type:'minus'})
    }

    const [ stateClick, setClick] = useState(0)

    function countClicks() {
         return setClick(stateClick + 1)
    }

    return (
        <main>
            <h1>{state}</h1>
            <h2>Counter Click: {stateClick}</h2>

            <button onClick={setStateAdd}>Add</button>
            <button onClick={setStateMinus}>Minus</button>
            <input type="number" id="btn"/>
        </main>
    )
}

ReactDOM.render(
    <MainComponent/>,
    document.querySelector('#app')
)