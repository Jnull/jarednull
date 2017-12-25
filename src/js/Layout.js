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
            <div style={headerBodySeparatorStyle}/>
            <MainNav />
            <footer style={footerStyle}>
              <div style={styleFooterBarStyle}>footer</div>
            </footer>
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

const footerStyle = {
    backgroundColor: 'rgb(110, 110, 208)'
}
const styleFooterBarStyle = {
    backgroundColor: 'rgb(110, 110, 1)',
    position: 'absolute',
    right: '0',
    bottom: '0',
    left: '0',
    height: '2em'
}
const MainNav = () => (
  <Router>
    <div>
      <div style={navStyle}>
        <ul style={menuNavStyle}>
          <Link to="/news"><button style={menuNavListItemStyle}>News</button></Link>
          <Link to="/media"><button style={menuNavListItemStyle}>Media</button></Link>
          <Link to="/projects"><button style={menuNavListItemStyle}>Projects</button></Link>
          <Link to="/webapps"><button style={menuNavListItemStyle}>WebApps</button></Link>
          <Link to="/resources"><button style={menuNavListItemStyle}>Resources</button></Link>
          <Link to="/about"><button style={menuNavListItemStyle}>About</button></Link>
          <Link to="/contact"><button style={menuNavListItemStyle}>Contact</button></Link>
        </ul>
      </div>
      <Route exact path="/" component={Home}/>
      <Route  path="/news" component={News}/>
      <Route  path="/media" component={Media}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/webapps" component={WebApps}/>
      <Route path="/resources" component={Resources}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)

const sectionHeaderStyle = {
color: 'blue',
marginLeft: '20px',
fontSize: '20px',
borderInlineEndWidth: '5px'
}
const introStyle = {
color: 'blue',
marginLeft: '40px',
fontSize: '14px',
borderInlineEndWidth: '5px'
}
const Home = () => (
  <div>
    Homeaaaa
      </div>
)

const News = () => (
  <div>
    <h1 style={sectionHeaderStyle}>News</h1>
  </div>
)

const Media = () => (
  <div>
    <h1 style={sectionHeaderStyle}>Media</h1>
  </div>
)

const Projects = () => (
  <div>
    <h1 style={sectionHeaderStyle}>Projects</h1>
  </div>
)

const WebApps = () => (
  <div>
    <h1 style={sectionHeaderStyle}>WebApps</h1>
  </div>
)

const Resources = () => (
  <div>
    <h1 style={sectionHeaderStyle}>Resources</h1>
  </div>
)

const About = () => (
  <div>
    <h1 style={sectionHeaderStyle}>About</h1>
  </div>
)

const Contact = () => (
  <div>
    <h1 style={sectionHeaderStyle}>Contact</h1>
  </div>
)



const menuNavListItemStyle =  {
height: '30px',
borderRadius: '6px 0px 6px 0px',
}


const menuNavStyle =  {
display: 'flex',
flexWrap: 'nowrap',
flexDirection: 'row',
justifyContent: 'right',
justifyContent: 'flex-end',
}
