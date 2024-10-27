import styled from "styled-components";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

const Div = styled.div`
    width: 50dvw;
    height: 50dvh;
    background-color: white;
    color: black;
`;

function Home(){
    return (
        <>
            <Header></Header>
            <NavBar></NavBar>
        </>
    )
}

export default Home;
