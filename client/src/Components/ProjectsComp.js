import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';


class ProjectsComp extends Component {

  constructor() {
    super();
    this.state = {
      numCol: 2
    }
    this._handleWindowResize = this._handleWindowResize.bind(this);
  }

  _handleWindowResize() {
    const w = window,
          d = document,
          documentElement = d.documentElement,
          body = d.getElementsByTagName('body')[0],
          width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

    if (width < 690) { 
      this.setState({numCol: 1});
    } else if (width > 690 && width < 1600) { 
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
      }
    }

    const item = [
      {
        overlayTitle: "Overlay title",
        imgSrc: "https://www.newton.ac.uk/files/covers/968361.jpg",
        CardTitle: "Card title",
        CardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
        siteUrl: "",
        gitHubUrl: ""
      },
    ];

    const list = [item, item, item, item];

    const cards = list.map((e, i) => {
      return (
        <Paper style={styles.paper} zDepth={0} key={i}>
          <Card>
            <CardMedia
              overlay={<CardTitle title="Overlay title" />}
            >
              <img src="https://www.newton.ac.uk/files/covers/968361.jpg"/>
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              {e.CardText}
            </CardText>
            <CardActions>
              <FlatButton label="Site" />
              <FlatButton label="Code" />
            </CardActions>
          </Card>
        </Paper> 
      );
    });

    return (
      <div>
        {cards}
      </div>
    );
  }

}

export default ProjectsComp;
