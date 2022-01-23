const { useReducer, useState, useContext, useEffect } = React
const list = []

function addNumber(newNmber, array) {
    array.push(newNmber)
}

function reducer(state, action) {
    switch (action.type) {
        case 'add': 
            const newNumber = document.querySelector('#number-input').value
            addNumber(newNumber,state)
            console.log(state)
    }
}
 
function AppComponent() {

    const [state, dispatch] = useReducer(reducer, [])
    
    function clickInput() {
        return dispatch({type:'add'})
    }

    return (
        <main>
            <input type="number" id="number-input"></input>
            <button onClick={clickInput}>Add number in the array</button>
        </main>
    )
}

ReactDOM.render(
    <AppComponent/>,
    document.querySelector('#App')
)