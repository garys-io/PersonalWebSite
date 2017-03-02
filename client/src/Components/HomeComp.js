import React, { Component } from 'react';

class HomeComp extends Component {

  render() {
    return (
      <div>
        Home
        <p>{this.props.data}</p>
      </div>
    );
  }

}

export default HomeComp;