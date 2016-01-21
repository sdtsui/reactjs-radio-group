//stateless component.
//  no props, only render.
var RadioOption = function (props) {
    return (
      <p className="radio">
        <label>
          <input type="radio" name={props.name} value={props.value}/>
          {props.children}
        </label>
      </p>
      );
  };

RadioOption.propTypes = {
  value: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};