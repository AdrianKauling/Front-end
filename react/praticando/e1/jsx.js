const {
  useReducer,
  useState
} = React;

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return state += 1;

    case 'minus':
      return state -= 1;
  }
}

function MainComponent() {
  const [state, dispatch] = useReducer(reducer, 0);

  function setStateAdd() {
    countClicks();
    return dispatch({
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
    onClick: setStateAdd
  }, "Add"), /*#__PURE__*/React.createElement("button", {
    onClick: setStateMinus
  }, "Minus"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MainComponent, null), document.querySelector('#app'));
