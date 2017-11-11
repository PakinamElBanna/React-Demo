import React, { Component } from 'react';
import axios from 'axios';


class CartDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      CartDetails : {}
    }
  }
componentWillReceiveProps(nextProps){
    var id = nextProps.match.params.id
    axios.get("http://localhost:3000/console/v3/carts/" + id)
    .then(res => {
      console.log(res.data)
      this.setState({
        CartDetails: res.data
      })
    })
  }

  render() {
    return (
      <div>
      <p>{this.state.CartDetails.id}</p>
      </div>
    );
  }
}

export default CartDetails;
