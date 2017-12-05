import React, {Component} from 'react';
import Navbar from './Navbar';
import Article from './Article';
import Redux from 'redux';

class App extends Component {
  componentDidMount() {
    fetch('https://medcircle-coding-project.s3.amazonaws.com/api/topics.json')
      .then(res => res.json())
      .then(data => this.props.store.dispatch({
        type: 'SET_INITIAL_TOPICS',
        data
      })).then(() => console.log(this.props.store.getState()))
  }

render() {
  console.log(this.props.store.getState());
  return (
    <div>
      <Navbar />
      <Article />
    </div>
    );
  }
}

export default App;
