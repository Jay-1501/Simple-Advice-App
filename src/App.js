import React, { Component } from 'react'
import axios from 'axios';

import './App.css';
export default class App extends Component {
    state = { advice : '' };

    componentDidMount(){
        //console.log('component did mount');
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((res)=>{
            const {advice} = res.data.slip;
            this.setState({advice});
            // console.log(advice);
        })
        .catch((e)=>{
            console.log(e);
        })
    }
  render() {
    const {advice} =this.state;
      
    return (
      <div className='app'>
          <div className='card'>
              <h1 className='heading'>{advice}</h1>
              <button className='button' onClick={this.fetchAdvice}>
                  <span>GIVE ME ADVICE</span>
              </button>
          </div>
      </div>
    )
  }
}
