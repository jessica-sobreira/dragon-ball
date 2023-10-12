import styled from "styled-components";


export const Container2 = styled.section<{reversed?: boolean}>`
   padding: 0;
   margin: 0;
   color: black;
   display: flex;
   align-items: stretch;
   ${(props) => props.reversed ? 'flex-direction: row-reverse;' : ''}

.title {
    font-size: 2.5em;
}

.content {
    flex-grow: 1;
    padding: 10%;

    p {
        font-size: 0.9em;
        font-weight: 300;
    }
}
`;

export const ImageContainer = styled.img`
    paddding: 0;
    margin: 0;
    width: 50%;
    object-fit: cover;
`;