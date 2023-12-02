import styled from 'styled-components';

export const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  background-color: lightyellow;

  #footer-links {
    color: darkorange;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    span {
      margin-bottom: 8px;
    }

    .divisor {
      font-size: 8px;
    }
  }

  #name-site {
    color: #555;
    font-size: 12px;
    margin-top: 8px;
    text-align: center;
  }

  #footer-icons {
    display: flex;
    justify-content: center;

    img {
      height: 30px;
      margin: 0 10px;
      filter: sepia(100%) saturate(100%) hue-rotate(20deg);
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    #footer-links {
      flex-direction: row;
      margin-bottom: 0;

      span {
        margin-bottom: 0;
        margin-right: 16px;
      }
    }

    #name-site {
      text-align: left;
    }

    #footer-icons {
      justify-content: flex-end;
    }
  }
`;
