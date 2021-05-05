import styled from 'styled-components';
import HeaderImage from './img/header.jpg'
import ScrollBlock from './components/scroll-block'
import BodyBackground from './img/body_background.jpg'
import './App.css';

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
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <ScrollBlock ypos={1.7} xpos={47} width={50} height={5} />
    </AppContainer>
  );
}

export default App;
