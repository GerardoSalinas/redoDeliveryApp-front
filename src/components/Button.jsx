import styled from "styled-components";

// falta incluir el icono en el boton
const StyledButton = styled.button`
    background-color: ${ (props) =>  props.altColor === true ? '#FF5353D6' : '#F6346BBE' }; 
    color : ${ (props) => props.altColor === true ? 'white' : 'black' };
    width: 100%;
    padding: 0.6rem 0.5rem;
    border: none;
    font-weight: ${(props) => props.altColor === false ? '600' : '400' };
    border-radius: 2rem;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    flex: 1;

    & > img {
        border-radius: 50%;
        width: 10%;
        height: 60%;
    }
}
`;


function Button(props){
    return (
        <StyledButton altColor={props.altColor} >
            { props.src ? (<img id="btn-icon" src={props.src} alt={props.altText} />) : null }
            <span id="btn-text" >{props.text}</span>
        </StyledButton>
    )
}

export default Button;