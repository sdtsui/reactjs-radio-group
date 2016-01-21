var RadioOptionGroup = React.createClass({
  onChange: function (event) {
    console.log('radioOptionGroup event :', event);
    if (this.props.other) {
      this.refs.other.forceUpdate(); //workaround: not a best practice...
    }
  },
  render: function () {
      return (
        <div onChange={this.onChange}>
          {this.props.options.map(function (opt) {
            return (
            <RadioOption value={opt.value} key={opt.value}>
              {opt.label}
            </RadioOption>
            );
          })}

          {this.props.other && <RadioOtherOption ref="other"/>}
            
        </div>
      );

  }

})