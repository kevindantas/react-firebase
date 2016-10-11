import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';


class App extends Component {

  constructor() {
    super();

    this.state =  {
      speed: 10
    }
  }

  componentDidMount() {
    this.setState({
      speed: 0
    })

    var db = firebase.database();

    var reactRef = db.ref('react/speed');

    reactRef.on('value', (snap) => {
      this.setState({speed: snap.val()})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.speed }</h1>
      </div>
    );
  }
}

export default App;
