"use strict";

var RadioOtherOption = React.createClass({
  displayName: "RadioOtherOption",

  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      checked: false
    };
  },

  onChange: function onChange(event) {
    console.log('radioOtherOption event :', event);
    var input = event.target;

    console.log(event, input);
    this.setState({
      checked: input.checked
    });
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    //summary:
    //  uses getDomNode to get
    //  uses componentDidUpdate, previousState
    //  forceUpdate...not recommended
    //  refs: look at parts of components
    var input = this.refs.input; //now only DOM nodes
    //0.14.2

    if (prevState.checked !== input.checked) {
      this.setState({
        checked: input.checked
      });
    }
  },
  render: function render() {
    return React.createElement(
      "p",
      { className: "form-group radio" },
      React.createElement(
        "label",
        null,
        React.createElement("input", { ref: "input", onChange: this.onChange, type: "radio",
          name: this.props.name, value: "other" }),
        "Other"
      ),
      this.state.checked && React.createElement(
        "label",
        { className: "form-inline" },
        "Please specify:",
        React.createElement("input", { type: "text", name: "referrer_other" })
      )
    );
  }
});