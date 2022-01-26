const {
  useState,
  useReducer,
  createContext,
  useEffect,
  useContext
} = React;

function MyApp() {
  return /*#__PURE__*/React.createElement("div", {
    className: "MainContainer"
  }, /*#__PURE__*/React.createElement(MyHeader, null), /*#__PURE__*/React.createElement(MySection, null));
}

function MyHeader() {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("img", {
    src: "../images/illustration-hero.svg",
    alt: "Garota ouvindo musica"
  }));
}

function MySection() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", null, "Order Summary"), /*#__PURE__*/React.createElement("p", null, "You can now listen to milions of songs, audiobooks, and podcasts on any device aniwhere you like!"), /*#__PURE__*/React.createElement(MyAside, null), /*#__PURE__*/React.createElement("button", {
    id: "ProceedPayment"
  }, "Proceed to Payment"), /*#__PURE__*/React.createElement("button", {
    id: "CancelOrder"
  }, "Cancel Order"));
}

function MyAside() {
  return /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("img", {
    src: "../images/icon-music.svg",
    alt: "icon Music"
  }), /*#__PURE__*/React.createElement("div", {
    id: "AnnualPlan"
  }, /*#__PURE__*/React.createElement("p", {
    id: "textPlan"
  }, "Annual Plan"), /*#__PURE__*/React.createElement("p", {
    id: "valuePlan"
  }, /*#__PURE__*/React.createElement("span", null, "$59.99"), "/year")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    rel: "next",
    target: "_self"
  }, "Change"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MyApp, null), document.querySelector('#app'));
