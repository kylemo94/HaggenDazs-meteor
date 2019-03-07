import React from 'react';
import { Menu, Dropdown, Grid, Icon } from 'semantic-ui-react';

export default class HaagenDazMenu extends React.Component {
  render() {
    return (
        <Menu borderless widths='six' className="topMenu">
          <Grid centered container>
            <Dropdown item text="PRODUCTS">
              <Dropdown.Menu>
                <Dropdown.Item >ALL PRODUCTS</Dropdown.Item>
                <Dropdown.Item >ICE CREAM</Dropdown.Item>
                <Dropdown.Item >TRIO</Dropdown.Item>
                <Dropdown.Item >BARS</Dropdown.Item>
                <Dropdown.Item >NON-DAIRY</Dropdown.Item>
                <Dropdown.Item >SORBET</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item >SHOP</Menu.Item>

            <Dropdown item text = 'ABOUT US'>
              <Dropdown.Menu>
                <Dropdown.Item >NEWS</Dropdown.Item>
                <Dropdown.Item >HONEY BEES</Dropdown.Item>
                <Dropdown.Item >CONTACT US</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item >LOCATOR</Menu.Item>

            <Menu.Item >RECIPES</Menu.Item>

            <Menu.Item><Icon name = "search"/></Menu.Item>
          </Grid>
        </Menu>
    );
  }
}
