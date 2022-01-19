const propNome = React.createContext('nome');

function meuComponente1() {
  const nome = 'Adrian Kauling dos Santos';
  return /*#__PURE__*/React.createElement(propNome.Provider, {
    value: nome
  }, /*#__PURE__*/React.createElement(meuComponente2, null), /*#__PURE__*/React.createElement("div", {
    className: "Filhao"
  }, "Dale"));
}

function meuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement(meuComponente3, null));
}

function meuComponente3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(meuComponente4, null));
}

function meuComponente4() {
  return /*#__PURE__*/React.createElement(propNome.Consumer, null, nome => /*#__PURE__*/React.createElement("h1", {
    className: "componente-4"
  }, "Sou filho de geralll, aeee karaii!! Alias meu nome e " + nome));
}

function meuComponente() {
  return /*#__PURE__*/React.createElement("main", {
    className: "meuComponente"
  }, /*#__PURE__*/React.createElement(meuComponente1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(meuComponente, null), document.getElementById('app'));
