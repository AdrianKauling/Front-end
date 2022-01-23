const {
  useReducer,
  useState,
  useContext,
  useEffect
} = React;
const list = [];

function addNumber(newNmber, array) {
  array.push(newNmber);
}

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      const newNumber = document.querySelector('#number-input').value;
      addNumber(newNumber, state);
      console.log(state);
  }
}

function AppComponent() {
  const [state, dispatch] = useReducer(reducer, []);

  function clickInput() {
    return dispatch({
      type: 'add'
    });
  }

  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "number-input"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: clickInput
  }, "Add number in the array"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.querySelector('#App'));
