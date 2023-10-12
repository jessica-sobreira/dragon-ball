import styled from "styled-components";

export const FlexSection = styled.section`
    display: flex;
    justify-content: space-around;
    background-color: lightyellow;
    padding-top: 0;

`;

export const Container = styled.section`
  padding: 3rem 0;
  margin: 0;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30vw;

h3 {
    margin: 0;
}

p {
    margin: 0.5rem;
    font-size: 1.5rem;
    font-weight: 300;
}
`;

export const IconContainer = styled.div`
    * {
        font-size: 5em;
        color: darkorange;
    }`;

