import styled from "styled-components";

export const FlexSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: lightyellow;
    padding: 20px 0;

    

    @media (min-width: 200px) {
      flex-wrap: wrap;
      align-items: flex-start; 
      padding-top: 0;

    }

`;

export const Container = styled.section`
  padding: 2rem 1rem; 
  margin: 0;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;


h3 {
    margin: 0;
}

p {
    margin: 0.5rem;
    font-size: 1.5rem;
    font-weight: 300;
}

@media (min-width: 768px) {
  width: 30vw;
  padding: 3rem 0;


  h3, p {
    text-align: left;
  }
} 

`;

export const IconContainer = styled.div`
    * {
        font-size: 5em;
        color: darkorange;
    }`;
