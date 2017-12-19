import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Radium from 'radium';
import Layout from "./Layout";

@Radium class App extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
    }
    componentWillMount() {
    }
    render() {
        return (
            <Router>
                <div style={styles}>
                    <Route path="/" component={Layout}/>
                </div>
            </Router>
        );
    }
}

//Styles Here:
App = Radium(App); //Needed to enable Radium
const styles = {
};

ReactDOM.render(<App/>, app); //"app" automagically is like saying document.getElementByID("app"); which lives in ./src/index.html
