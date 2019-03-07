import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return <Image fluid
                  src='http://roundmenu.s3-website-us-east-1.amazonaws.com/640x400/images/restaurants/rst_900880.jpg'/>;
  }
}
