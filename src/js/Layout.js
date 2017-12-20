//This is needed for all react files?
import React from "react";
import Radium from 'radium';
import {  HashRouter as Router,  Route,  Link} from 'react-router-dom'
//this allows us to import Layout
export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
    render() {
        return (
          <div>
            <div style={headerStyle}>
              Jared Null
              <link rel='icon' href='favicon.ico'/>
              <meta charSet='utf-8'/>
              <title>Jared Null</title>
            </div>
            <div style={headerBodySeparatorStyle}></div>
            <MainNav />
          </div>
              );
    }
}
Layout = Radium(Layout);  //Takes Inline Styles
const bannerStyle = {
}
const headerStyle = {
      background: 'linear-gradient(to left, teal , white)',
      textAlign: 'right',
      fontSize: '80px',
      fontFamily: 'Delicious',
      padding: '5px 20px 0px 5px',
      color: 'rgba(93, 32, 32, 1)',
      lineHeight: '1.14'
}
const headerBodySeparatorStyle = {
      backgroundImage: 'radial-gradient(rgb(177, 21, 21) 20%, black 65%, black 40%)',
      height: '10px'
}
const quoteStyle = {
  fontSize: '35px',
  textAlign: 'center',
  textDecoration: 'underline',
  color: 'black'
}

const navStyle = {
    backgroundColor: 'rgb(110, 110, 208)'
}
const MainNav = () => (
  <Router>
    <div>
      <div style={navStyle}>
        <ul style={menuNavStyle}>
          <Link to="/news"><button style={menuNavListItemStyle}>News</button></Link>
          <Link to="/projects"><button style={menuNavListItemStyle}>Projects</button></Link>
          <Link to="/about"><button style={menuNavListItemStyle}>About</button></Link>
          <Link to="/contact"><button style={menuNavListItemStyle}>Contact Me</button></Link>
          <Link to="/webapps"><button style={menuNavListItemStyle}>WebApps</button></Link>
        </ul>
      </div>
      <Route exact path="/" component={Home}/>
      <Route  path="/news" component={News}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/webapps" component={WebApps}/>
    </div>
  </Router>
)
const Home = () => (
  <div>
    Home
  </div>
)

const News = () => (
  <div>
    News
  </div>
)

const Projects = () => (
  <div>
    Projects
  </div>
)

const About = () => (
  <div>
    About
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const WebApps = () => (
  <div>
    WebApps
  </div>
)

const menuNavListItemStyle =  {
height: '30px',
borderRadius: '10px',
}

const menuNavStyle =  {
display: 'flex',
flexWrap: 'nowrap',
flexDirection: 'row',
justifyContent: 'right',
}
