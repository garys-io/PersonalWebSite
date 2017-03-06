import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

import reduce from '../img/reduce.png';
import './reduce.css';


class HomeComp extends Component {

  render() {

    const styles = {
      heading: {
        textAlign: 'center',
        fontWeight: '300',
        margin: '20px 3% 0 3%'
      },
      text: {
        textAlign: 'center',
        maxWidth: '500px',
        margin: '10px 25%',
        lineHeight: '150%'
      },
      map: {
        width: '50%',
        margin: '10px 25%'
      }
    }
    
    return (
      <div>
          <h1 style={styles.heading}>Hey there, I am Gurpreet Singh</h1>
          <p style={styles.text}>You could call me <strong>Gary</strong></p>
          <br />
          <p style={styles.text}>I am a currently a Mobile Solutions Development student at Conestoga college. Seeking a coop opportunity this fall.</p>
          <p style={styles.text}>
            have extensive knowledge of working with HTML/CSS, JavaScript, Python, React, Django,
            JQuery, Google Maps, D3, Bootstrap, SQL, MongoDB, Java, C#.
            Along with these languages/libraries I have working knowledge of linux command line and
            basic AWS services.
          </p>
          <img className="reduce-img" src={reduce} />
          <p style={styles.text}>
            <a href="mailto:gsingh0370@conestogac.on.ca?Subject=Co%20op" target="_top">email</a>
          </p>
          <img style={styles.map} src="https://maps.googleapis.com/maps/api/staticmap?center=43.4853742,-80.2&zoom=9&size=600x300&markers=color:blue|label:G|43.3852995,-80.4119173" />
      </div>
    );
  }

}

export default HomeComp;