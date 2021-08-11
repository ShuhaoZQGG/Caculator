function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleNumber",











    e => {
      if (this.state.currentNumber === 0)
      {
        this.setState({
          currentNumber: e.target.value,
          display: e.target.value });

      } else {
        this.setState({
          currentNumber: this.state.currentNumber + e.target.value,
          display: this.state.display + e.target.value });


      }
      switch (e.target.value) {
        case 'ac':{
            this.setState({
              currentNumber: 0,
              display: 0,
              previousNumber: 0,
              operation: undefined });

          }
          break;
        case '.':{
            if (this.state.currentNumber.includes(e.target.value)) {
              this.setState({
                currentNumber: this.state.currentNumber,
                display: this.state.display });

            }
          }
          break;
        case '0':{
            if (this.state.currentNumber.startsWith(e.target.value)) {
              this.setState({
                currentNumber: this.state.currentNumber,
                display: this.state.display });

            }
          }}


    });_defineProperty(this, "handleOperation",


    e => {

      switch (e.target.value) {
        case "=":{
            this.setState({
              operation: e.target.value,
              currentNumber: eval(`${this.state.previousNumber} ${this.state.operation} ${this.state.currentNumber}`),
              display: parseFloat(eval(`${this.state.previousNumber} ${this.state.operation} ${this.state.currentNumber}`)).toFixed(2) });



          }
          break;
        default:{
            if (!this.state.operation || this.state.operation === "=") {
              this.setState({
                previousNumber: this.state.currentNumber,
                currentNumber: 0,
                operation: e.target.value,
                display: this.state.display + e.target.value });

            } else
            if (this.state.operation && this.state.operation !== "=") {
              this.setState({
                operation: e.target.value,
                previousNumber: eval(`${this.state.previousNumber} ${this.state.operation} ${this.state.currentNumber}`),
                currentNumber: 0, display: parseFloat(eval(`${this.state.previousNumber} ${this.state.operation} ${this.state.currentNumber}`)).toFixed(2) });

            } else
            {
              this.setState({
                operation: e.target.value,
                display: this.state.previousNumber + e.target.value });

            }
          };}









    });this.state = { currentNumber: 0, previousNumber: 0, operation: undefined, display: 0 };this.handleNumber = this.handleNumber.bind(this);this.handleOperation = this.handleOperation.bind(this);}



  render() {
    return /*#__PURE__*/(

      React.createElement("div", { className: "box", id: "box" }, /*#__PURE__*/
      React.createElement("p", { style: { position: 'absolute', top: 0 } }, JSON.stringify(this.state, null, 2)), /*#__PURE__*/
      React.createElement("div", { className: "display", id: "display" },
      this.state.display), /*#__PURE__*/

      React.createElement("div", { className: "operations", id: "operations" }, /*#__PURE__*/
      React.createElement("button", { id: "clear", value: "ac", onClick: this.handleNumber }, "AC"), /*#__PURE__*/
      React.createElement("button", { id: "divide", className: "formula", value: "/", onClick: this.handleOperation }, "/"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", className: "formula", value: "*", onClick: this.handleOperation }, "\xD7"), /*#__PURE__*/
      React.createElement("button", { id: "seven", value: "7", onClick: this.handleNumber }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", value: "8", onClick: this.handleNumber }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nien", value: "9", onClick: this.handleNumber }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", className: "formula", value: "-", onClick: this.handleOperation }, "-"), /*#__PURE__*/
      React.createElement("button", { id: "four", value: "4", onClick: this.handleNumber }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", value: "5", onClick: this.handleNumber }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", value: "6", onClick: this.handleNumber }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "plus", className: "formula", value: "+", onClick: this.handleOperation }, "+"), /*#__PURE__*/
      React.createElement("button", { id: "one", value: "1", onClick: this.handleNumber }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", value: "2", onClick: this.handleNumber }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", value: "3", onClick: this.handleNumber }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "equal", className: "formula", value: "=", onClick: this.handleOperation }, "="), /*#__PURE__*/
      React.createElement("button", { id: "zero", value: "0", onClick: this.handleNumber }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "dot", value: ".", onClick: this.handleNumber }, "."))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));