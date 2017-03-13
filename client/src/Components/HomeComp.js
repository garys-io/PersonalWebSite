import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import reduce from '../img/reduce.png';
import me from '../img/me_cropped.png';
import './HomeComp.css';


class HomeComp extends Component {

  _mail() {
      window.location.href = "mailto:gsingh0370@conestogac.on.ca?Subject=Co%20op";
  }

  render() {

    const styles = {
      avatarImg: {
        position: 'relative',
        top: '20px',
        borderRadius: '100%',
        width: '70px',
        paddingRight: '5px'
      },
      heading: {
        textAlign: 'center',
        fontWeight: '100',
        color: '#777',
        margin: '20px 3%'
      },
      outerList: {
        padding: '15px 0 0 20px',
      },
      innerList: {
        padding: '15px 0 0 40px',
        fontSize: '14px'
      }
    }
    
    return (
      <div>
          <div>
            <h1 style={styles.heading}><img src={me} style={styles.avatarImg}/> Gurpreet Singh | Gary</h1>
          </div>
          <br />
          <p className="center-con text">
              I am currently a Mobile Solutions Development student at Conestoga college
          </p>
          <br />
          <Divider />
          <br />
          <br />  
          <p className="center-con text">I work with following technologies</p>
          <div className="center-con">
            <List>
                <p style={styles.outerList} > Front </p>
                  <ListItem style={styles.innerList} primaryText="HTML/CSS, Bootstrap, Material UI" disabled />
                  <ListItem style={styles.innerList} primaryText="JavaScript, React, JQuery" disabled />
                  <ListItem style={styles.innerList} primaryText="Google Maps, D3(Data Driven Documents)" disabled />
                <br />
                <p style={styles.outerList} > Back </p>
                  <ListItem style={styles.innerList} primaryText="Python, Django" disabled />
                  <ListItem style={styles.innerList} primaryText="JavaScript, Node, Express" disabled />
                  <ListItem style={styles.innerList} primaryText="SQL, MongoDB" disabled />
                  <ListItem style={styles.innerList} primaryText="Java, C#" disabled />
                  <ListItem style={styles.innerList} primaryText="linux command line and basic AWS services" disabled />
            </List>
          </div>
          <br />
          <br />
          <Divider />
          <br />
          <br />
          <p className="center-con text">Below is example of what I write</p>
          <br />
          <br />  
          <img className="center-con" src={reduce} />
          <br />
          <br />
          <Divider />
          <br />
          <div className="center-con">
            <RaisedButton onClick={this._mail} label="E-mail" primary fullWidth />
          </div>
          <br />
      </div>
    );
  }

}

export default HomeComp;