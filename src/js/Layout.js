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
            <link rel='icon' href='favicon.ico'/>
            <meta charSet='utf-8'/>
            <title>Jared Null</title>
            <MainNav />
            <footer style={footerStyle}>
              <div style={styleFooterBarStyle}>Null 2018</div>
            </footer>
          </div>
              );
    }
}
const bannerStyle = {
}
const headerStyle = {
      display: 'block',
      background: 'linear-gradient(to left, teal , white)',
      textAlign: 'right',
      fontSize: '80px',
      fontFamily: 'Delicious',
      padding: '5px 20px 0px 5px',
      color: 'rgb(144, 26, 26)',
      lineHeight: '1.14',
      width: '100%'
}
const headerBodySeparatorStyle = {
      backgroundImage: 'radial-gradient(rgb(177, 21, 21) 20%, black 65%, black 40%)',
      height: '10px',

}
const quoteStyle = {
  fontSize: '35px',
  textAlign: 'center',
  textDecoration: 'underline',
  color: 'black'
}

const navStyle = {
    backgroundColor: 'rgb(110, 110, 208)',
    borderBottom: '1px solid black'
}

const footerStyle = {
}
const styleFooterBarStyle = {
    display: 'flex',
    backgroundColor: 'rgb(110, 110, 1)',
    position: 'absolute',
    right: '0',
    bottom: '0',
    left: '0',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    fontSize: '16'
}
const MainNav = () => (
  <Router>
    <div>
      <Link  id='test' to='/' style={headerStyle}>Jared Null</Link>
      <div style={headerBodySeparatorStyle}/>
      <div id='test2' style={navStyle}>
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
    <h1 style={sectionHeaderStyle}>Home</h1>
    <div style={homeMainStyle}>
      <Link to='/media'><h1>Media</h1></Link>
      <ol>
        <li><a href="https://www.whitehatsec.com/blog/browser-wars-to-browser-foes-ms13-069/">Browser Wars written by Jared Null</a></li>
      </ol>
      <Link to='/media'><h1>Projects</h1></Link>
      <Link to='/media'><h1>WebApps</h1></Link>
      <Link to='/media'><h1>Resources</h1></Link>
      <Link to='/media'><h1>About</h1></Link>
      <Link to='/media'><h1>Contact</h1></Link>
    </div>
  </div>
    )

const  homeMainStyle = {
  marginLeft: '35px',
}
const News = () => (
  <div>
    <h1 style={sectionHeaderStyle}>News</h1>
  </div>
)

const Media = () => (
  <div>
    <h1 style={sectionHeaderStyle}>Media</h1>
    <ol>
      <li><a href="https://www.whitehatsec.com/blog/browser-wars-to-browser-foes-ms13-069/">Browser Wars written by Jared Null</a></li>
    </ol>
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
      <h1>Links</h1>
      <ol>
        <li><a href="http://gamefans.ca">Gamefans - Chiprunner</a></li>
        <li><a href="https://learningnerd.com">Liz Krane</a></li>
        <li><a href="https://www.geshl2.com">Golden Eye: Source</a></li>
      </ol>
    </div>
  </div>
)

const resourcesMainStyle  = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'enabled',
  marginLeft: '35px',
  justifyContent: 'center',
  listStylePosition: 'inside',
  listStyle: 'none'
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

Layout = Radium(Layout);  //Takes Inline Styles
