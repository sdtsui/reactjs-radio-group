// create component
//  createClass, render method
//    returns HTML
var Demo = React.createClass({
  //mandatory for react components
  render: function () {

    var radioOptions = [
      { value: 'newspaper', label: 'Newspaper'},
      { value: 'radio', label: 'Radio'},
      { value: 'tv', label: 'Television'},
      { value: 'search', label: 'Search Engine'},
      { value: 'social media', label: 'Social Media'}
    ];
    //copy body
    return (
      //className, reserved word
      <div className="container">
        <h1>React.js Radio Group Demo</h1>
        
        <form>
          <p className="h3">How did you hear about us?</p>
          <RadioOptionGroup other={true} options={radioOptions}/>
          <p><input type="submit"/></p>
        </form>
      </div>
      );
  }
})