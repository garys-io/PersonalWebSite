import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainComp from './Components/MainComp';
import Data from './Data.json';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainComp data={Data} />
      </MuiThemeProvider>
    );
  }
}

export default App;
