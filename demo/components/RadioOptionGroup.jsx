var RadioOptionGroup = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    other: React.PropTypes.bool,
    options: React.PropTypes.array.isRequired
  },

  onChange: function (event) {
    console.log('radioOptionGroup event :', event);
    if (this.props.other) {
      this.refs.other.forceUpdate(); //workaround: not a best practice...
    }
  },

  render: function () {
      var name = this.props.name;

      return (
        <div onChange={this.onChange}>
          {this.props.options.map(function (opt) {
            return (
            <RadioOption name={name} value={opt.value} 
              key={opt.value}>
              {opt.label}
            </RadioOption>
            );
          })}

          {this.props.other && <RadioOtherOption name={name}ref="other"/>}
            
        </div>
      );

  }

})