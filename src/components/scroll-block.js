
import styled from 'styled-components/macro';

const Container = styled.div `
  background: red;
  width: 50%;
  position: absolute;
`;

function ScrollBlock(props) {

  let parameters = {
    top: (props.ypos) + '%',
    left: (props.xpos) + '%',
    width: (props.width) + '%',
    height: (props.height) + '%'
  }


  return (
    <Container style={parameters}>
      {/* <ScrollForeground />
      <ScrollMask />
      <ScrollImage />
      <ScrollBackground /> */}
      <p>Yo</p>
    </Container>
  );
}

export default ScrollBlock;
