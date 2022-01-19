const test = React.createContext('valueCorrently');

function componentMain() {
  const [valueCorrently, setValue] = React.useState(0);

  const newValue = () => {
    setValue(valueCorrently + 1);
    console.log(valueCorrently);
  };

  return /*#__PURE__*/React.createElement(test.Provider, {
    value: valueCorrently
  }, /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(filhoMain1, {
    fNewValue: newValue
  }), /*#__PURE__*/React.createElement(filhoMain2, {
    valueCount: valueCorrently
  })));
}

function filhoMain1(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(componenteWithButton, {
    fNewValue: props.fNewValue
  }, /*#__PURE__*/React.createElement("label", null, "Incrementar: ")));
}

function componenteWithButton(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.children, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.fNewValue
  }, "clique"));
}

function filhoMain2(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(boxContagem, {
    valueCount: props.valueCount
  }));
}

function boxContagem(props) {
  return /*#__PURE__*/React.createElement(test.Consumer, null, valueCorrently => /*#__PURE__*/React.createElement("h2", null, "Contagem: ", valueCorrently));
}

ReactDOM.render( /*#__PURE__*/React.createElement(componentMain, null), document.querySelector('#app'));
