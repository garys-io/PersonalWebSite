import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import ActionCode from 'material-ui/svg-icons/action/code';
import AvWeb from 'material-ui/svg-icons/av/web'


import res_vis_2 from '../img/res_vis_2.png';
import tic_2 from '../img/tic_2.png';
import quiz_1 from '../img/quiz_1.png';
import car_portal_1 from '../img/car_portal_1.png'
import buseeta_1 from '../img/buseeta_1.png'


class ProjectsComp extends Component {

  constructor() {
    super();
    this.state = {
      numCol: 2
    }
    this._handleWindowResize = this._handleWindowResize.bind(this);
  }

  _openLink(url) {
    window.open(url, '_blank');
  }

  _handleWindowResize() {
    const w = window,
          d = document,
          documentElement = d.documentElement,
          body = d.getElementsByTagName('body')[0],
          width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

    if (width < 1000) { 
      this.setState({numCol: 1});
    } else if (width > 1000 && width < 1600) { 
      this.setState({numCol: 2});
    } else if (width > 1600) { 
      this.setState({numCol: 3});
    }
  }

  componentDidMount () {
    this._handleWindowResize();
    window.addEventListener('resize', this._handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleWindowResize);
  }


  render() {

    const styles = {
      paper: {
        float: 'left',
        padding: '3%',
        minWidth: '200px',
        width: 100/this.state.numCol + '%'
      },
      row: {
          display: 'flex',
          flexWrap: 'wrap'
      }
    }

    return (
      <div>
          
        <div style={styles.row}>
          <Paper style={styles.paper} zDepth={0}>
              <Card>
                <CardMedia
                  overlay={<CardTitle title="Tic Tac Toe" />}
                >
                  <img src={tic_2}/>
                </CardMedia>
                <CardTitle title="Realtime Multiplayer Game"
                           subtitle="Socket.io, Material UI, React, Node/Express" />
                <CardText>
                  Tic tac toe game where you could make a game and start playing
                  against your friend realtime. This real-time capability is
                  because of the socket.io library which let both server and
                  client communicate with each other in real time. It also
                  look really nice because of use of Material UI.
                </CardText>
                <CardActions style={styles.button}>
                  <RaisedButton primary label="Site" icon={<AvWeb />} onClick={() => this._openLink('http://sample-env.twmququmnx.us-west-2.elasticbeanstalk.com/')} />
                  <RaisedButton label="Code" icon={<ActionCode />} onClick={() => this._openLink('https://github.com/garybains/RealTimeTicTakToe/')} />
                </CardActions>
              </Card>
          </Paper>
          <Paper style={styles.paper} zDepth={0}>
              <Card>
                <CardMedia
                  overlay={<CardTitle title="Result Visualiser" />}
                >
                  <img src={res_vis_2}/>
                </CardMedia>
                <CardTitle title="Data Visualisation App"
                           subtitle="D3(Data Driven Documents), jQuery, Bootstrap" />
                <CardText>
                  This is an old school single page app made by just using jQuery
                  and D3. The entire app is basically an HTML and a javaScript file
                  containing all the data. It is so simple that it is hosted via AWS
                  S3 (Simple Storage Service). With all the color gradients its
                  mesmerizing. It was my first serious endeavor into web development.
                </CardText>
                <CardActions>
                  <RaisedButton primary label="Site" icon={<AvWeb />} onClick={() => this._openLink('https://s3.us-east-2.amazonaws.com/resviz/index.html')} />
                  <RaisedButton label="Code" icon={<ActionCode />} onClick={() => this._openLink('https://github.com/garybains/result_viz')} />
                </CardActions>
              </Card>
          </Paper>
        </div>


        <div style={styles.row}>
            <Paper style={styles.paper} zDepth={0}>
              <Card>
                <CardMedia
                  overlay={<CardTitle title="Buseeta" />}
                >
                  <img src={buseeta_1}/>
                </CardMedia>
                <CardTitle title="Fleet management application"
                           subtitle="jQuery, Bootstrap, Google Maps API" />
                <CardText>
                  Real time location tracking, management console, user side
                  application in Android, dynamic routes & rides, resources
                  management - drivers / vehicles.
                  <br />
                  Contributed to the project by creating interactive dashboard
                  for creating and modifying vehicles, schedule, routes and
                  stops using Bootstrap jQuery and Google Maps.
                </CardText>
                <CardActions>
                  <RaisedButton primary label="Site" icon={<AvWeb />} onClick={() => this._openLink('http://buseeta.mcruiseon.com')} />
                </CardActions>
              </Card>
            </Paper>
            <Paper style={styles.paper} zDepth={0}>
              <Card>
                <CardMedia
                  overlay={<CardTitle title="drive4wheels [ongoing...]" />}
                >
                  <img src={car_portal_1}/>
                </CardMedia>
                <CardTitle title="Web portal of Cars"
                           subtitle="Python/Django, jQuery, Bootstrap, Google Maps API" />
                <CardText>
                  A web based car portal for A web portal for buying, booking
                  test-drive, renting cars using Bootstrap, Google Maps, jQuery
                  at the front end and python/Django at the backend.
                </CardText>
                <CardActions>
                  <RaisedButton primary label="Site" icon={<AvWeb />} onClick={() => this._openLink('http://staging.drive4wheels.com')} />
                </CardActions>
              </Card>
            </Paper>

        </div>  


        <div style={styles.row}>
            <Paper style={styles.paper} zDepth={0}>
              <Card>
                <CardMedia
                  overlay={<CardTitle title="Quiz App [ongoing...]" />}
                >
                  <img src={quiz_1}/>
                </CardMedia>
                <CardTitle title="Cloud based quiz app"
                           subtitle="React, Node/Express, MongoDB on Atlas(Database as a service)" />
                <CardText>
                  A simple MCQ(multiple choice question) quiz app where teachers can create
                  quiz and students can attempt them.
                </CardText>
                <CardActions>
                  <RaisedButton primary label="Site" icon={<AvWeb />} onClick={() => this._openLink('http://first-dev.us-west-2.elasticbeanstalk.com/')} />
                  <RaisedButton label="Code" icon={<ActionCode />} onClick={() => this._openLink('https://github.com/garybains/Quiz/')} />
                </CardActions>
              </Card>
            </Paper>
        </div>
      </div>
    );
  }

}

export default ProjectsComp;
