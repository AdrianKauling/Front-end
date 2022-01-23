const {
  useReducer,
  useState
} = React;

function reducer(state, action) {
  const valueBtn = document.querySelector('#btn').value;

  switch (action.type) {
    case 'add':
      state.push(parseInt(valueBtn));
      return state;

    case 'minus':
      return state -= 1;
  }
}

function MainComponent() {
  const [state, dispatch] = useReducer(reducer, [0]);
  console.log(state);

  function setStateAdd() {
    dispatch({
      type: 'add'
    });
  }

  function setStateMinus() {
    countClicks();
    return dispatch({
      type: 'minus'
    });
  }

  const [stateClick, setClick] = useState(0);

  function countClicks() {
    return setClick(stateClick + 1);
  }

  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, state), /*#__PURE__*/React.createElement("h2", null, "Counter Click: ", stateClick), /*#__PURE__*/React.createElement("button", {
    onClick: countClicks
  }, "Add"), /*#__PURE__*/React.createElement("button", {
    onClick: setStateMinus
  }, "Minus"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "btn"
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MainComponent, null), document.querySelector('#app'));
