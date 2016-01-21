// create component
//  createClass, render method
//    returns HTML
var Demo = React.createClass({displayName: "Demo",
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
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, "React.js Radio Group Demo"), 
        
        React.createElement("form", null, 
          React.createElement("p", {className: "h3"}, "How did you hear about us?"), 
          React.createElement(RadioOptionGroup, {other: true, options: radioOptions, name: "referrer"}), 
          React.createElement("p", null, React.createElement("input", {type: "submit"}))
        )
      )
      );
  }
})