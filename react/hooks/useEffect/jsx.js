const {
  createContext,
  useState,
  useEffect,
  useContext
} = React;
const counterContext = createContext('counter');

function AppComponent() {
  const [counter, setCounter] = useState(0);

  function somaUm() {
    setCounter(prevState => prevState + 1);
  }

  function tiraUm() {
    setCounter(prevState => prevState - 1);
  } // useEffect(
  //     () => {
  //         return (console.log('useEffect rodou!'))
  //     },[somaUm]
  // )


  return /*#__PURE__*/React.createElement(counterContext.Provider, {
    value: {
      counter
    }
  }, /*#__PURE__*/React.createElement(Myh1, null), /*#__PURE__*/React.createElement("button", {
    onClick: somaUm
  }, "bota"), /*#__PURE__*/React.createElement("button", {
    onClick: tiraUm
  }, "tira"));
}

function Myh1() {
  const counter = useContext(counterContext);
  useEffect(() => {
    return () => console.log('counter mudou de estado');
  }, [counter.counter]);
  return /*#__PURE__*/React.createElement("h1", null, counter.counter);
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.getElementById('app'));
