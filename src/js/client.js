import React from 'react'
import ReactDOM from 'react-dom';
import Layout from "./Layout";


class App extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
    }
    componentWillMount() {
    }
    render() {
        return (
              <Layout/>
        );
    }
}

ReactDOM.render(<App/>, app); //"app" automagically is like saying document.getElementByID("app"); which lives in ./src/index.html
