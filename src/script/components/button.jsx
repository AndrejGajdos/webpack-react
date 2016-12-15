import React, {Component} from 'react';

import './button.scss';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";

export default class Button extends Component {
    render() {
        return <button className="btn btn-info" type="button">
            <span className="glyphicon glyphicon-refresh"></span>Click me!!!
        </button>;
    }
}
