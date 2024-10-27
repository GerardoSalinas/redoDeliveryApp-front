import styled from 'styled-components'
import './App.css'
import Button from './components/Button'
const BackgroundImage = styled.section`

@media (340px <= width <= 640px ){
    background: no-repeat center/100% url(/src/assets/homeImage.jpg);
    width: 100vw;
    height: 55vh;
  } 
  border-radius: 1rem 1rem 0px 0px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const SlidingMenu = styled.div`
  width: 100%;
  height: 45vh;
  z-index: 1;
  background-color: white;
  position: absolute;
  outline: red 1px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.5rem 1.5rem 0px;
  padding: 0.5rem 0.8rem;
  row-gap: 1rem;

  &:before {
    content: '';
    width: 40px;
    height: 5px;
    background-color: red;
    position: relative;
    border-radius: 1rem;
  }

  
`;

const BtnContainer = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100%; 
  gap: 1rem; 
  margin-top: 1rem; 
  flex: 1;
`;

const MainTitle = styled.h1`
text-wrap: balanced; 
font-size: 2.3rem; 
text-align: center; 
margin-top: 1rem; 

`;

function App() {
  const googleSignIn = () => { }

  const regularSignIn = () => { }

  return (
    <>
      <BackgroundImage/>
      <SlidingMenu>
        <MainTitle>Quickest delivery in town!</MainTitle>
        <h4>Choose a delicious meal</h4>
        <BtnContainer>
          <Button src="/src/assets/google-logo.svg" text="Sign in with Google" altColor={true} onClick={googleSignIn} ></Button>
          <Button text="Other sign in options" altColor={false} onClick={regularSignIn} ></Button>
        </BtnContainer>
      </SlidingMenu>
    </>
  )
}

export default App
