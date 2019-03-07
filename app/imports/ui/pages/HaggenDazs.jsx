import React from 'react';
import TopImage from '../components/TopImage';
import HaagenDazMenu from '../components/HaagenDazMenu';
import FullWidthImage from '../components/FullWidthImage';
import FooterMenu from '../components/FooterMenu';

export default class HaggenDazs extends React.Component {

  render() {
    return (
        <div>
          <TopImage/>
          <HaagenDazMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}
