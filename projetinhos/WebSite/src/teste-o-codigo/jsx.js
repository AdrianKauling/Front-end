const {
  useReducer,
  useState,
  useContext,
  useEffect,
  createContext
} = React;
const ContextStateArray = createContext('stateArray');
const InitialState = {
  list: []
};

function sortList(list) {
  if (list.length >= 4) {
    if (list.filter(p => p > -1 && p === parseInt(p)).length === list.length) {
      const arrayOrdered = list.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        if (a === b) return 0;
      });
      return arrayOrdered[0] + arrayOrdered[1];
    }

    alert('Floats numbers or numbers non-positive in the array');
  }

  alert('The list need have four positions.');
}

const actions = {
  pushElement: 'pushElement',
  removeElement: 'removeElement',
  clearList: 'clearList'
};

function reducer(state, action) {
  switch (action.type) {
    case actions.pushElement:
      const newElement = document.querySelector('#number-input').value;
      state.list.push(parseInt(newElement));
      return {
        list: state.list
      };

    case actions.removeElement:
      const indexRemoved = document.querySelector('#ipt-remove-element').value;
      const o = state.list.splice(indexRemoved - 1, 1);
      console.log(o);
      return {
        list: state.list
      };

    case actions.clearList:
      console.log('aqui: ' + InitialState.list);
      return {
        list: []
      };

    default:
      return state;
  }
}

function AppComponent() {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return /*#__PURE__*/React.createElement(ContextStateArray.Provider, {
    value: {
      state,
      dispatch
    }
  }, /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(BoxAddElement, null), /*#__PURE__*/React.createElement(BoxRemoveElement, null), /*#__PURE__*/React.createElement("button", {
    onClick: () => dispatch({
      type: actions.clearList
    })
  }, "Clear List"), /*#__PURE__*/React.createElement(SunTwoLessNumbersOfList, null)));
}

function BoxAddElement() {
  const {
    state,
    dispatch
  } = useContext(ContextStateArray);
  {
    console.log(state.list);
  }
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    id: "list"
  }, /*#__PURE__*/React.createElement("h1", null, "List:"), /*#__PURE__*/React.createElement("textarea", {
    name: "",
    id: "",
    cols: "30",
    rows: "10",
    readOnly: true,
    value: state.list.join(', ')
  }, " ")), /*#__PURE__*/React.createElement("label", {
    htmlFor: "number-input"
  }, "Add number in list: "), /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "number-input"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => dispatch({
      type: actions.pushElement
    })
  }, "Add number in the array"));
}

function BoxRemoveElement() {
  const {
    dispatch
  } = useContext(ContextStateArray);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "ipt-remove-element"
  }, "Insert the index of the number to be removed: "), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "1.. n",
    id: "ipt-remove-element"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => dispatch({
      type: actions.removeElement
    })
  }, "Remove Index"));
}

function SunTwoLessNumbersOfList() {
  const {
    state
  } = useContext(ContextStateArray);
  const [sum, setSum] = useState(0);

  function attSum() {
    const copyState = state.list.slice();
    const sumTwoNumbersLess = sortList(copyState);
    setSum(sumTwoNumbersLess);
  }

  return /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("h3", null, "The sum is: ", sum), /*#__PURE__*/React.createElement("button", {
    onClick: attSum
  }, "Sum"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.querySelector('#App'));
