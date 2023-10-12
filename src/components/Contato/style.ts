import styled from "styled-components";


export const ContatoContainer = styled.div`
    height: 40vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: url("/src/assets/images/contato.png");
    background-size: cover;
    background-position-y: -500px;

    p {
        font-size: 5em;
        color: white;
        text-shadow: 1px 1px 2px black;

        font-weight: bold;
    }
`;


