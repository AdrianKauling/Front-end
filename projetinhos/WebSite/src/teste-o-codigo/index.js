const { useReducer, useState, useContext, useEffect,createContext } = React
const ContextStateArray = createContext('stateArray')
const InitialState = { list: [] }

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

const actions = {
    pushElement: 'pushElement',
    removeElement: 'removeElement',
    clearList: 'clearList'
}

function reducer(state, action) {
    switch (action.type) {
        case actions.pushElement:
            const newElement = document.querySelector('#number-input').value
            state.list.push(parseInt(newElement))

            return { list: state.list }
        
        case actions.removeElement:
            const indexRemoved = document.querySelector('#ipt-remove-element').value

            const o = state.list.splice(indexRemoved - 1, 1)
            console.log(o)
            return { list: state.list }

        case actions.clearList:
            
            console.log('aqui: '+ InitialState.list)
            return {list: []}

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
                    <button onClick={() => dispatch({type:actions.clearList})}>Clear List</button>
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
            
            <div id="list">
                <h1>List:</h1>
                <textarea name="" id="" cols="30" rows="10"  readOnly value={state.list.join(', ')}> </textarea>
            </div>
            <label htmlFor="number-input">Add number in list: </label>
                <input type="number" id="number-input"/>
            <button onClick={ () => dispatch({type: actions.pushElement})}>
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
        const copyState = state.list.slice()
        const sumTwoNumbersLess = sortList(copyState)
        setSum(sumTwoNumbersLess)   
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