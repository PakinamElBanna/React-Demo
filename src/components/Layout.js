import React, { Component } from 'react';
import SidebarLeftSlideAlong from './Sidebar';
import CartDetails from './CartDetails';
import Carts from './Carts';


class Layout extends Component {

  render() {
    return (
      <div>
      <Carts />
      </div>
    );
  }
}

export default Layout;
