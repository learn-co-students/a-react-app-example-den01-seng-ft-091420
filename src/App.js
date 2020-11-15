import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// All visible content is contained within this App class.
// Possible ot have multiple files that contain visible content by using App and ExComponent
//ExComponent is used within App, so App is at the top-most level (parent component) of our app

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>Now</p>
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App;
