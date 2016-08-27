var React = require('react');
var ListItem = React.createClass({
    render: function(){
      return(
        <li >
          <h4>{this.props.muhittin}</h4>
           {this.props.memo}
          </li>
      );
    }
});

module.exports = ListItem;
