import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';


class ProjectsComp extends Component {

  render() {

    const styles = {
      paper: {
        float: 'left',
        margin: '5%',
        minWidth: '250px',
        width: '40%'
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
        <Paper style={styles.paper} zDepth={1} key={i}>
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
