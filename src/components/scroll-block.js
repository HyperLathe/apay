import styled from 'styled-components/macro';
import { ParallaxBanner } from 'react-scroll-parallax';

const Container = styled.div `
  width: 50%;
  position: absolute;
`;

function ScrollBlock(props) {

  let parameters = {
    top: (props.ypos) + '%',
    left: (props.xpos) + '%',
    width: (props.width) + '%',
    height: (props.height) + '%'
  };


  return (
<Container style={parameters}>
    <ParallaxBanner
      layers={[
          {
            image: props.pic,
            amount: 0.1,
          },
          {
            image: props.mask,
            amount: -0.1,
          },
          {
            image: props.bg,
            amount: 0.2,
            expanded: false
          },
          {
            image: props.fg,
            amount: -0.2,
            expanded: false
          },
      ]}
      style={{
          height: '100%',
      }}
  >
  </ParallaxBanner>
  </Container>
    
  );
}

export default ScrollBlock;
