function AppComponent() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header1, null), /*#__PURE__*/React.createElement(Main, null));
}

function Header1() {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(HeadersChildrens, null));
}

function HeadersChildrens() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "header-texto"
  }, "Desafio - CodeWars"), /*#__PURE__*/React.createElement("p", {
    className: "header-texto"
  }, "N\xE3o \xE9 falta de caf\xE9 e nem tequila, \xE9 meu c\xF3digo que n\xE3o compila")), /*#__PURE__*/React.createElement("span", {
    id: "pipe"
  }), /*#__PURE__*/React.createElement("div", {
    id: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./images/alvo-60px.png",
    alt: "Alvo"
  })));
}

function Main() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Article, null, /*#__PURE__*/React.createElement("h1", null, "Titulo do desafio")), /*#__PURE__*/React.createElement(JavaScriptAside, null));
}

function Article(props) {
  return /*#__PURE__*/React.createElement("article", null, props.children, /*#__PURE__*/React.createElement("p", null, "Explica\xE7\xE3o do desafio "));
}

function JavaScriptAside() {
  const code = `function findOutlier(integers){

    let par = 0
    let impar = 0

    for(let i = 0; i < integers.length; i++) {
        let imparOuPar = integers[i]%2 === 0? 'par': 'impar'

        imparOuPar === 'par'? par += 1: impar += 1
    }

    if(par < impar) {
        const res = integers.filter((position) => position % 2 === 0)
        return res[0]
    }else {
        const res = integers.filter((position) => position % 2 !== 0)
        return res[0]
    }
        
}`;
  return /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("h2", null, "C\xF3digo do desafio resolvido"), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, code)));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.getElementById('app'));
