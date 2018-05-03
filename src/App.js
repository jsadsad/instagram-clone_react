import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <Post nickname="Chris" avatar="http://icons.iconarchive.com/icons/designcontest/ecommerce-business/256/user-icon.png" caption="Lake Tahoe, California" image="https://i.redd.it/s9n3vjcrkn6z.jpg"/>
          <Post nickname="Danish" avatar="http://downloadicons.net/sites/default/files/user-anonymous-icon-310855.png" caption="Big Sur, Central California" image="http://i.imgur.com/Q7gXXcn.jpg"/>
        </section>
      </div>
    )
  }
}

export default App;
