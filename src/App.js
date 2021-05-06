import styled from 'styled-components/macro';
import { ParallaxProvider } from 'react-scroll-parallax';

import HeaderImage from './img/header.jpg'
import ScrollBlock from './components/scroll-block'
import BodyBackground from './img/body_background.jpg'
import './App.css';

import img1_bg from './img/img1_bg.png';
import img1_fg from './img/img1_fg.png';
import img1_mask from './img/img1_mask.png';
import img1_pic from './img/img1.jpg';

import img_vid_bg from './img/img_vid_bg.png';
import img_vid_fg from './img/img_vid_fg.png';
import img_vid_pic from './img/img_vid.png';

import img2_bg from './img/img2_bg.png';
import img2_fg from './img/img2_fg.png';
import img2_mask from './img/img2_mask.png';
import img2_pic from './img/img2.jpg';

import img3_bg from './img/img3_bg.png';
import img3_fg from './img/img3_fg.png';
import img3_mask from './img/img3_mask.png';
import img3_pic from './img/img3.jpg';

import img4_bg from './img/img4_bg.png';
import img4_fg from './img/img4_fg.png';
import img4_mask from './img/img4_mask.png';
import img4_pic from './img/img4.jpg';

const AppContainer = styled.div `
  max-width: 1440px;
  margin: 0px auto;
  position: relative;
  background: url(${BodyBackground}) top center / 100% no-repeat;
  height: 725vw;
  max-height: 10447px;
`;

const Header = styled.header `
  background: url(${HeaderImage}) center / cover no-repeat;
  width: 100%;
  max-width: 1440px;
  position: fixed;
  display: block;
  height: 7.5vw;
  max-height: 108px;
  z-index: 2;
`;

function App() {
  return (
    <ParallaxProvider>
      <AppContainer>
        <Header />
        <ScrollBlock ypos={1.5} xpos={51} width={47} height={5.5} bg={img1_bg} fg={img1_fg} mask={img1_mask} pic={img1_pic} />
        <ScrollBlock ypos={12.5} xpos={6} width={88} height={4.5} bg={img_vid_pic} fg={img_vid_fg} pic={img_vid_bg} />
        <ScrollBlock ypos={20} xpos={10} width={40} height={6} bg={img2_bg} fg={img2_fg} mask={img2_mask} pic={img2_pic} />
        <ScrollBlock ypos={29.6} xpos={54} width={42} height={5} bg={img3_bg} fg={img3_fg} mask={img3_mask} pic={img3_pic} />
        <ScrollBlock ypos={35.8} xpos={6} width={42} height={5} bg={img4_bg} fg={img4_fg} mask={img4_mask} pic={img4_pic} />
        <ScrollBlock ypos={41.7} xpos={54} width={42} height={5} bg={img3_bg} fg={img3_fg} mask={img3_mask} pic={img3_pic} />
      </AppContainer>
    </ParallaxProvider>
  );
}

export default App;
