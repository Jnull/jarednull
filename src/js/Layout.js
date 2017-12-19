//This is needed for all react files?
import React from "react";
import Radium from 'radium';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom'

//this allows us to import Layout
export default class Layout extends React.Component {
  constructor(props) {
    super(props)

  }


    render() {
        return (
          <div>
            <div style={headerStyle}>
              GameFans
              <link rel='icon' href='favicon.ico'/>
              <meta charSet='utf-8'/>
              <title>Gamefans!</title>

            </div>
            <div style={headerBodySeparatorStyle}></div>
            <BasicExample />


          </div>
              );
    }
}

Layout = Radium(Layout);  //Takes Inline Styles

const bannerStyle = {
  display: 'block',
  margin: '0 auto',
  textAlign: 'center',
}

const headerStyle = {
      backgroundImage: 'radial-gradient(gold 42%, black 87%, black 74%)',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'rgb(177, 170, 53)',
      fontSize: '80px',
      textShadow: 'rgb(7, 7, 253) 0px 0px 0px',
      fontFamily: 'Delicious'
}
const headerBodySeparatorStyle = {
      backgroundImage: 'radial-gradient(red 15%, black 65%, black 40%)',
      height: '5px'
}


const menuButtonsListStyle =  {
flexWrap: 'nowrap',
flexDirection: 'row',
display: 'flex',
width: '100%',
justifyContent: 'center'
}
const menuButtonDivListStyle =  {
}

const menuButtonListStyle =  {
display: 'flex',
borderRadius: '5px'
}

const BasicExample = () => (
  <Router>
    <div>
      <ul style={menuButtonsListStyle}>
        <div style={menuButtonDivListStyle}><Link to="/"><button style={menuButtonListStyle}>Home</button></Link></div>
        <div style={menuButtonDivListStyle}><Link to="/news"><button style={menuButtonListStyle}>News</button></Link></div>
        <div style={menuButtonDivListStyle}><Link to="/about"><button style={menuButtonListStyle}>About</button></Link></div>
        <div style={menuButtonDivListStyle}><Link to="/services"><button style={menuButtonListStyle}>Services</button></Link></div>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route  path="/news" component={News}/>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
    </div>
  </Router>
)


const homeStyle = {
  margin: 'auto 50px'
}
const newsStyle = {
  margin: 'auto 50px'
}
const aboutStyle = {
  margin: 'auto 50px'
}
const topicsStyle = {
  margin: 'auto 50px'
}

const mvpStyle = {
  color: 'red'
}

const homeSeparatorStyle = {
borderTop: '1px solid black',
top: '50px'
}

const Home = () => (
  <div style={homeStyle}>
    <div>
      <h2 style={homeSeparatorStyle}><Link to="/">Home</Link></h2>
      <h4>Welcome to GameFans the hottest Gaming Community on the Planet!</h4>
    </div>
    <div>
      <h2  style={homeSeparatorStyle}>Games</h2>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>
      <h4>Elite Dangerous!</h4>

    </div>
    <div>
      <h2 style={homeSeparatorStyle}>MVP - On January 1st 2018, a new winner will be selected!</h2>
      <h4> Congratulations <span style={mvpStyle}>tittylicker526</span>!! You're the MVP for Decemeber 2017. - you receive a $20 steam credit.</h4>
    </div>
  </div>
)

const newsImageSeparatorStyle = {
  margin: '2px',
  border: '1px solid black',
  width: '20px',
  height: '20px',
}

const News = () => (
  <div style={newsStyle}>
    <h2>News</h2>
    <h4 style={newsSeparatorStyle}> <img style={newsImageSeparatorStyle} src='bolt.png' /> tittylicker526 wins GameFans MVP - Chiprunner</h4>
    <h4 style={newsSeparatorStyle}> <img style={newsImageSeparatorStyle} src='bolt.png' /> New WebSite Online - 12/8/2017 - Null</h4>
    <h4 style={newsSeparatorStyle}> <img style={newsImageSeparatorStyle} src='bolt.png' /> GameFans Created - 7/4/1776 - Chiprunner</h4>
  </div>
)

const newsSeparatorStyle = {
  border: '1px solid black'
}

const aboutSeparatorStyle = {
  left: '2px',
  border: '1px solid black'
}

const aboutImageSeparatorStyle = {
  margin: '2px',
  border: '1px solid black',
  width: '20px',
  height: '20px',
}

const aboutPersonContainerStyle = {
  margin: '2px',
  border: '1px solid black',
}

const About = () => (
  <div style={aboutStyle}>
    <h2>About</h2>
    <h4>
      <div style={aboutPersonContainerStyle}>
        <img style={aboutImageSeparatorStyle} src='person.ico' /> Chiprunner - A badass dude that created the GameFans Community.
      </div>
      <div style={aboutPersonContainerStyle}>
        <img style={aboutImageSeparatorStyle} src='person.ico' /> Null - Created this site.
      </div>
    </h4>
  </div>
)

const Services = ({ match }) => (
  <div style={topicsStyle}>
    <h2>Services</h2>
    <ul>
      <li>
        <Link to={`${match.url}/communication`}>
          Host: TeamSpeak * Ventrilo * Mumble * IRC
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/games`}>
          <div>Golden Eye: Source</div>
          <div>Rust</div>
          <div>World of Warcraft - Private Server</div>
          <div>Wolfenstein - Enemy Territory</div>

        </Link>
      </li>
      <li>
        <Link to={`${match.url}/sites`}>
          Rasberry Pie and Full Dedicated Servers
        </Link>
      </li>
      <hr />
    </ul>

    <Route path={`${match.url}/:topicId`} component={Service}/>
    <Route exact path={match.url} render={() => (
      <h3>Select a service!</h3>
    )}/>
  </div>
)

const Service = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
