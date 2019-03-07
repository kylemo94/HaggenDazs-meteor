import React from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Menu className = "footer-background">
          <Container>
            <Menu.Item fitted position='left'>
              JOIN US
            </Menu.Item>
            <Menu.Item fitted><Icon name = 'twitter'/></Menu.Item>
            <Menu.Item fitted><Icon name = 'facebook'/></Menu.Item>
            <Menu.Item fitted><Icon name = 'instagram'/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
