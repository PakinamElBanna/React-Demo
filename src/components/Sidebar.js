import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import './Sidebar.css'
import Layout from './Layout'
import mainLogo from './elves_logo.png'
class SidebarLeftSlideAlong extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
      <div class="ui small menu">
      <div class="logo">
      <img src={mainLogo} class="logo--image"/>
      <p class="tagline">Operations</p>
      </div>
        <div class="right menu">
        <div class="item">
              <div class="ui primary button">Logout</div>
          </div>
        </div>
      </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='Orders'>
              <Icon name='tag' />
              Orders
            </Menu.Item>
            <Menu.Item name='Merchants'>
              <Icon name='truck' />
              Merchants
            </Menu.Item>
            <Menu.Item name='Office expenses'>
              <Icon name='money' />
              Office expenses
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
            <Layout />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeftSlideAlong
