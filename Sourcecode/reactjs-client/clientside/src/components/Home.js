import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

const _margin = 150;

const styles = {
  margin: _margin + 'px ' + _margin + 'px ' + _margin + 'px'
}

class Home extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div onDoubleClick={this.toggleVisibility}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            width='thin'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name='home'>
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h1'>Wallets</Header>
              <Icon name='sidebar'/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}


export default Home;