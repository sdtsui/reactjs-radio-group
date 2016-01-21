var RadioOtherOption = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {
      checked: false
    };
  },

  onChange: function (event) {
    console.log('radioOtherOption event :', event);
    var input = event.target;

    console.log(event, input);
    this.setState({
      checked: input.checked
    });

  },
  componentDidUpdate: function (prevProps, prevState) {
    //summary:
    //  uses getDomNode to get 
    //  uses componentDidUpdate, previousState
    //  forceUpdate...not recommended
    //  refs: look at parts of components
    var input = this.refs.input;//now only DOM nodes
      //0.14.2

    if (prevState.checked !== input.checked) {
      this.setState({
        checked: input.checked
      });
    }
  },
  render: function() {
    return (
      <p className="form-group radio">
        <label>
          <input ref="input" onChange={this.onChange} type="radio" 
          name={this.props.name} value="other"/>
          Other
        </label>

        {this.state.checked && (
          <label className="form-inline">
            Please specify:
            <input type="text" name="referrer_other"/>
          </label>
        )}
      </p>
      );
  }
});