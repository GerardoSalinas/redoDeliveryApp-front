
import styled from "styled-components";
import BackArrow from "./BackArrow";

const HeaderContainer = styled.div`
    width: 100vw;
    height: 8vh;
    position: fixed;
    top: 0px;
    box-sizing: border-box;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
`;


function Header(){
    return (
        <HeaderContainer>
            <BackArrow></BackArrow>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2>What do you like?</h2>
                <h3 style={{color: '#475569'}} >Make your own set</h3>
            </div>
        </HeaderContainer>
    )
}

export default Header;