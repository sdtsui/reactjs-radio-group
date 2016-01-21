var RadioOptionGroup = React.createClass({
  render: function () {
      return (
        <div>
          {this.props.options.map(function (opt) {
            return (
            <RadioOption value={opt.value} key={opt.value}>
              {opt.label}
            </RadioOption>
            );
          })}
          
          {this.props.other && <RadioOtherOption/>}
            
        </div>
      );

  }

})