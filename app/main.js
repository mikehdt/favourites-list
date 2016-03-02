"use strict";

let React = require('react'),
    ReactDOM = require('react-dom');

import { Router, Route, Navigation, browserHistory } from 'react-router';

let App = React.createClass({
    render: () => {
        return (
            <div className="it-works">
                <h1>It works!</h1>
            </div>
        )
    }
});

let NotFound = React.createClass({
    render: function () {
        return <h1>That'd be a 404, then?</h1>
    }
});

let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="*" component={NotFound}/>
    </Router>
);

ReactDOM.render(routes, document.querySelector('#main'));