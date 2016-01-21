"use strict";

var RadioOptionGroup = React.createClass({
  displayName: "RadioOptionGroup",

  propTypes: {
    name: React.PropTypes.string.isRequired,
    other: React.PropTypes.bool,
    options: React.PropTypes.array.isRequired
  },

  onChange: function onChange(event) {
    console.log('radioOptionGroup event :', event);
    if (this.props.other) {
      this.refs.other.forceUpdate(); //workaround: not a best practice...
    }
  },

  render: function render() {
    var name = this.props.name;

    return React.createElement(
      "div",
      { onChange: this.onChange },
      this.props.options.map(function (opt) {
        return React.createElement(
          RadioOption,
          { name: name, value: opt.value,
            key: opt.value },
          opt.label
        );
      }),
      this.props.other && React.createElement(RadioOtherOption, { name: name, ref: "other" })
    );
  }

});