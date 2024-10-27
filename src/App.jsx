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

function App() {
  const googleSignIn = () => { }

  const regularSignIn = () => { }

  return (
    <>
      <BackgroundImage/>
      <SlidingMenu>
        <h1 style={{textWrap: 'balanced', fontSize: '2.3rem', textAlign: 'center', marginTop: '1rem' }} >Quickest delivery in town!</h1>
        <h4>Choose a delicious meal</h4>
        <div id="btn-container" style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '1rem', marginTop: '1rem', flex: '1'}}>
          <Button src="/src/assets/google-logo.svg" text="Sign in with Google" altColor={true} onClick={googleSignIn} ></Button>
          <Button text="Other sign in options" altColor={false} onClick={regularSignIn} ></Button>
        </div>
      </SlidingMenu>
    </>
  )
}

export default App
