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
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Article, null, /*#__PURE__*/React.createElement("h1", null, "Sum of two lowest positive integers")), /*#__PURE__*/React.createElement(JavaScriptAside, null));
}

function Article(props) {
  return /*#__PURE__*/React.createElement("article", null, props.children, /*#__PURE__*/React.createElement("p", null, "Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed."), /*#__PURE__*/React.createElement("p", null, "For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7."), /*#__PURE__*/React.createElement("p", null, "Other example: [10, 343445353, 3453445, 3453545353453] should return 3453455."));
}

function JavaScriptAside() {
  const code = `function SumTwoNumbersPositive(array) {

        if (array.length >= 4) {
    
            if (array.filter(p => p > -1 && p === parseInt(p)).length === array.length) {
    
                const arrayOrdered = array.sort((a, b) => {
                    if (a > b) return 1
                    if (a < b) return -1
                    if (a === b) return 0
                })
    
                return arrayOrdered[0] + arrayOrdered[1]
            }
    
            throw new Error('Floats numbers or numbers non-positive in the array')
        }
    
        throw new Error('Array with less of four positions.')
    }
    
    console.log(SumTwoNumbersPositive([992, 28, 66, 87 , 5 ,80 ,9 ,34]))`;
  return /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("h2", null, "C\xF3digo do desafio resolvido"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, code))), /*#__PURE__*/React.createElement(AsideButton, null));
}

function AsideButton() {
  return /*#__PURE__*/React.createElement("div", {
    id: "testeCodigo"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./teste-o-codigo/index.html",
    rel: "",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("button", null, "Testar o c\xF3digo")), /*#__PURE__*/React.createElement("button", null, "Copiar \u2752"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.getElementById('app'));
