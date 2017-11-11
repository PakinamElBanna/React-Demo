import React, { Component } from 'react';
import { Header, Image, Table, Grid } from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import axios from 'axios';
import  CartDetails from './CartDetails';

class Carts extends Component{
  constructor(){
    super();
    this.state = {
      carts: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/console/v3/carts')
    .then(res => {
      // console.log(res.data.carts)
      this.setState({
        carts: res.data.carts
      })
    })
  }

  render(){
    return (
      <Grid>
      <Grid.Row>
      <Grid.Column width={8}>
      <div className="Carts">
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Carts</Table.HeaderCell>
            <Table.HeaderCell>Cart Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {this.state.carts.map((c) => {
          return (
            <Table.Row>
              <Table.Cell>
              <Link to={"/carts/"+c.id}>
                <Header as='h4' image>
                  <Image src= {c.user.image.file.url} shape='rounded' size='mini' />
                  <Header.Content>
                    <Header.Subheader>{c.user.first_name} {c.user.last_name}</Header.Subheader>
                  </Header.Content>
                </Header>
                </Link>
              </Table.Cell>
              <Table.Cell>
              <div class="summary">
              <p>Cart Items: {c.cart_items.length}</p>
              <p>Elves Fees: {c.elves_fee}</p>
              <p>Shipping Fees: {c.elves_shipping}</p>
              <p>Total: {c.total} {c.currency}</p>
              </div>
              </Table.Cell>
            </Table.Row>
          )
        })}


        </Table.Body>
      </Table>
      </div>
      </Grid.Column>
      <Grid.Column width={8}>
      <Route
      path="/carts/:id"
      render={(props) => <CartDetails {...props} />}
      />
      </Grid.Column>
      </Grid.Row>
      </Grid>
    )
  }

}

export default Carts
