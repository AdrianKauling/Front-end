function AppComponent() {
  const [counter, setCounter] = React.useState(0);

  function somaUm() {
    setCounter(prevState => prevState + 1);
  }

  function tiraUm() {
    setCounter(prevState => prevState - 1);
  }

  React.useEffect(() => {
    return console.log('useEffect rodou!');
  }, [counter]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, counter), /*#__PURE__*/React.createElement("button", {
    onClick: somaUm
  }, "bota"), /*#__PURE__*/React.createElement("button", {
    onClick: tiraUm
  }, "tira"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.getElementById('app'));
