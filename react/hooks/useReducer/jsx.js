const {
  useReducer
} = React;
let initialValue = 0;

function whenComponentRenderFirstTime() {
  console.log('Component render than first time');
  return initialValue;
}

function reducer(state, action) {
  switch (action.type) {
    case 'addOne':
      return state += 1;

    case 'removeOne':
      return state -= 1;

    default:
      return state;
  }
}

function AppComponent() {
  const [state, dispatch] = useReducer(reducer, initialValue, whenComponentRenderFirstTime);

  function somaUm() {
    dispatch({
      type: 'addOne'
    });
  }

  function tiraUm() {
    dispatch({
      type: 'removeOne'
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, state), /*#__PURE__*/React.createElement("button", {
    onClick: somaUm
  }, "bota"), /*#__PURE__*/React.createElement("button", {
    onClick: tiraUm
  }, "tira"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.getElementById('app'));
