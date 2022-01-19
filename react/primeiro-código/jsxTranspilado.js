function meuComponente1() {
  const nome = 'Adrian Kauling dos Santos';
  let [idade, setIdade] = React.useState(17);
  setTimeout(() => {
    setIdade(18);
  }, 1000);
  return /*#__PURE__*/React.createElement(meuComponente2, null, /*#__PURE__*/React.createElement(meuComponente3, null, /*#__PURE__*/React.createElement(meuComponente4, {
    idade: idade,
    nome: nome
  }), /*#__PURE__*/React.createElement("p", null, idade)));
}

function meuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, props.children);
}

function meuComponente3(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, props.children);
}

function meuComponente4(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "componente-4"
  }, "Sou filho de geralll, aeee karaii!! Alias meu nome e ", props.nome), /*#__PURE__*/React.createElement("p", null, "Tenho ", props.idade, " anos."));
}

function meuComponente() {
  return /*#__PURE__*/React.createElement("main", {
    className: "meuComponente"
  }, /*#__PURE__*/React.createElement(meuComponente1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(meuComponente, null), document.getElementById('app'));
