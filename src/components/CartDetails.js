import React, { Component } from 'react';
import axios from 'axios';
import './CartDetails.css';


class CartDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      CartDetails : {},
      cart_items:[]
    }
  }
componentWillReceiveProps(nextProps){
    var id = nextProps.match.params.id
    axios.get("http://localhost:3000/console/v3/carts/" + id)
    .then(res => {
      console.log(res.data)
      this.setState({
        CartDetails: res.data,
        cart_items:res.data.cart_items
      })
    })
  }

  render() {
    return (
      <div>
      <h1>Cart Details</h1>
{this.state.cart_items.map((i)=> {
  return(
    <table class="ui definition table">
    <tbody>
    <tr>
    <td class="two wide column"></td>
    <td><img src={i.item.image.file.thumb.url}/></td>
    </tr>
    <tr>
    <td class="two wide column">Name</td>
    <td>{i.item.headline}</td>
    </tr>
    <tr>
    <td>Description</td>
    <td>{i.item.description}</td>
    </tr>
    <tr>
    <td>Total Amount</td>
    <td>{i.item.total_amount} {i.item.currency}</td>
    </tr>
    </tbody>
    </table>

  )
})}
      </div>
    );
  }
}

export default CartDetails;
