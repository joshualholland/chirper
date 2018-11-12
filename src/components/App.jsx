import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import ChirpTimeline from './ChirpTimeline';

let data = [
  {
    username: 'Sean Kingston',
    chirp: 'Hello World!'
  },
  {
    username: 'T-Pain',
    chirp: 'Welcome to Chirper!'
  },
  {
    username: 'K-Dawg',
    chirp: 'Start a chirpin!'
  }
]
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chirp: '',
      username: '',
      chirps: []
    }
  }

  timeLine(e) {
    this.setState({
      chirps: []
    })
  }

  componentDidMount() {
    this.setState({ chirps: data })
  }

  handleSubmit(e) {
    e.preventDefault()

    // snapshots
    let chirps = this.state.chirps
    let chirp = {
      chirp: this.state.chirp,
      username: this.state.username
    }
    chirps.unshift(chirp)

    // Return input field to original
    this.setState(
      {
        chirp: '',
        username: '',
        chirps
      })
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <Jumbotron />
          <form className='p-4'>
            <div className="form-group text-center text-success">
              <label>Username</label>
              <input
                className="form-control text-center"
                placeholder="Who's Chirpin'?"
                onChange={(e) => this.setState({ username: e.target.value })}
                value={this.state.username} />
            </div>
            <div className="form-group text-center">
              <label className='text-success'>Chirp It!!!</label>
              <input
                className="form-control text-center"
                placeholder="What've you got to say?"
                onChange={(e) => this.setState({ chirp: e.target.value })}
                value={this.state.chirp} />
            </div>
            <div className='col-12 text-center'>
              <button type="submit" className="btn btn-success align-self-center" onClick={(e) => this.handleSubmit(e)}>Chirp</button>
            </div>
          </form>
          <ChirpTimeline chirps={this.state.chirps} />
        </div>
      </>
    )
  }

}


export default App;
