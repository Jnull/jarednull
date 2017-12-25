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
      color: 'rgb(144, 26, 26)',
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
    <div style={projectsMainStyle}>
      <h1>Web Apps</h1>

      <ol>
        <li><a href='http://www.pushvote.com'>PushVote</a></li>
        <li><a href='http://www.blackhat.io'>BlackHat</a></li>
        <li><a href='http://www.whitehat.io'>WhiteHat</a></li>
      </ol>
      <h1>Add ONs / Extentions</h1>
      <ol>
        <li><a href="https://github.com/Jnull/noclick">Firefox - NoClick</a></li>
      </ol>
      <h1>Hardware</h1>
      <ol>
        <li>LED Illuminator bypass meter maid parking meters.</li>
      </ol>
      <h1>Games</h1>
      <a href="http://www.geshl2.com">Golden Eye Source</a>
      <ol>
        <li>GE:S - Give users Dev Tags on per server (DNS)</li>
        <li>GE:S - Generate Hashed UserID from SteamID (C)</li>
        <li><a href="https://github.com/Jnull/ges-gameplay-TeamArsenal">GE:S - Created TeamArsenal</a></li>
      </ol>
      <h1>Bug Bounty</h1>
      <ol>
        <li><a href="https://www.123formbuilder.com/security-acknowledgements.htm">123formbuilder.com (XSS)</a></li>
        <li>Department of Justice (XSS)</li>
      </ol>
    </div>
  </div>
)

const  projectsMainStyle = {
  marginLeft: '35px'
}

const WebApps = () => (
  <div>
    <h1 style={sectionHeaderStyle}>WebApps</h1>
    <ol>
      <li><a href='http://www.pushvote.com'>PushVote</a></li>
      <li><a href='http://www.blackhat.io'>BlackHat</a></li>
      <li><a href='http://www.whitehat.io'>WhiteHat</a></li>
    </ol>
  </div>
)

const Resources = () => (
  <div>
    <h1 style={sectionHeaderStyle}>Resources</h1>
    <div style={resourcesMainStyle}>
      <h1>Books</h1>
      <ol>
        <li>Web Application Security Handbook</li>
        <li>Hacker's Playbook</li>
        <li>Hacking Exposed</li>
      </ol>
    </div>
  </div>
)

const resourcesMainStyle  = {
  marginLeft: '35px'
}


const About = () => (
  <div>
    <h1 style={sectionHeaderStyle}>About</h1>
    <div style={aboutMainStyle}>
      <p>Thrill Seeker, Risk Taker, Knowledge Aquirer</p>
      <p>Interested in all advancement of technology, against planned obsolescence.</p>
    </div>
  </div>
)

const aboutMainStyle = {
marginLeft: '35px'
}

const Contact = () => (
  <div>
    <h1 style={sectionHeaderStyle}>Contact</h1>
    <ol>
      <li>Linkedin</li>
      <li>contactme@jarednull.com</li>
    </ol>
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
