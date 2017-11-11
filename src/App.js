import React, { Component } from 'react';
import Layout from './components/Layout';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import SidebarLeftSlideAlong from './components/Sidebar';
class App extends Component {

  render() {
    return (
      <SidebarLeftSlideAlong />
    );
  }
}

export default App;
