import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faBagShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";


const NavContainer = styled.div`
    width: 100vw;
    height: 8vh;
    position: fixed;
    bottom: 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;



function NavBar(){
    return (
        <NavContainer>
            <IconContainer>
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: '1.7rem' }} ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '1.7rem' }}/>
                <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '1.7rem' }} />
                <FontAwesomeIcon icon={faHeart} style={{ fontSize: '1.7rem' }}/>
                <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.7rem' }} />
            </IconContainer>
        </NavContainer>
    )
}

export default NavBar;