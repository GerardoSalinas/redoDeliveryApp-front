import styled from "styled-components"

const MainContainer = styled.div`
    width: 100dvw;
    height: 100dvh;
    padding: 1rem;
    margin: 0px;


`;


export default function ErrorPage(){
    return (
        <>
            <MainContainer>
                <h2>Oops!</h2>
                <p>An unexpected error has ocurred</p>
            </MainContainer>
        </>
    )
}