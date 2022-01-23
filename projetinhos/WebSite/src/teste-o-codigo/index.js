const { useReducer, useState, useContext, useEffect,createContext } = React
const ContextStateArray = createContext('stateArray')

const InitialState = { list: [] }

const actions = {
    pushElement: 'pushElement',
    removeElement: 'removeElement'
}

function sortList(list) {

    if (list.length >= 4) {
    
        if (list.filter(p => p > -1 && p === parseInt(p)).length === list.length) {

           

            const arrayOrdered = list.sort((a, b) => {
                if (a > b) return 1
                if (a < b) return -1
                if (a === b) return 0
            })

            return arrayOrdered[0] + arrayOrdered[1]
        }

        alert('Floats numbers or numbers non-positive in the array')
    }

    alert('The list need have four positions.')

}


function reducer(state, action) {
    switch (action.type) {
        case actions.pushElement:
            const newElement = document.querySelector('#number-input').value
            state.list.push(parseInt(newElement))

            return { list: state.list}
        
        case actions.removeElement:
            const indexRemoved = document.querySelector('#ipt-remove-element').value

            state.list.splice(indexRemoved - 1, 1)
            return { list: state.list }

        default: 
            return state
    }
}

function AppComponent() {

    const [state, dispatch] = useReducer(reducer, InitialState)
    
    return (
        
            <ContextStateArray.Provider value={ {state, dispatch} }>
                <main>
                    <BoxAddElement /> 
                    <BoxRemoveElement/>
                    <SunTwoLessNumbersOfList/>              
                </main>
            </ContextStateArray.Provider>
    )
}

function BoxAddElement() {
    const {state, dispatch} = useContext(ContextStateArray)
    {console.log(state.list)}
    return (
        <section>
            
            <h1>{state.list.join(' - ')}</h1>
            <label htmlFor="number-input">Add number in list: </label>
                <input type="number" id="number-input"/>
            <button onClick={ () => dispatch({type:actions.pushElement})}>
                Add number in the array
            </button>

        </section>
    )
}

function BoxRemoveElement() {
    const { dispatch } = useContext(ContextStateArray)
    return (
        <section>
            <label htmlFor="ipt-remove-element">Insert the index of the number to be removed: </label>
            <input type="number" placeholder="1.. n" id="ipt-remove-element"/>
            <button onClick={() => dispatch({type:actions.removeElement})}>
                Remove Index
            </button>
        </section>
    )
}

function SunTwoLessNumbersOfList() {
    const { state } = useContext(ContextStateArray)
    const [ sum, setSum] = useState(0)
    

    function attSum () {
        const arraystring = state.list.join(',')

        const soma = sortList(state.list)
        setSum(soma)

        state.list = arraystring.split(',')
        for(let i = 0; i < state.list.length; i++) {
            state.list[i] = parseInt(state.list[i])
        }
    }

    return (
        <aside>
            <h3>The sum is: {sum}</h3>
            <button onClick={attSum}>Sum</button>
        </aside>
    )
}

ReactDOM.render(
    <AppComponent/>,
    document.querySelector('#App')
)