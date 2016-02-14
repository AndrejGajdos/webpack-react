var React = require('react');
var buttonStyle = require('./button.scss');

var bootstrap = require('bootstrap');
var bootstrapStyle = require("../../../node_modules/bootstrap/dist/css/bootstrap.css");

export class Button extends React.Component {
  render() {
    return <button className="btn btn-info" type="button">
      <span className="glyphicon glyphicon-refresh"></span>
    </button>;
  }
}
