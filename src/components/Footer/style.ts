import styled from 'styled-components';

export const FooterStyled = styled.div`
    display: flex;
    flex-direction: row;
    padding: 60px 120px;
    justify-content: space-between;
    background-color: lightyellow;

    #footer-links {
        color: darkorange;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
            margin-right: 16px;
        }
        .divisor {
            font-size: 8px;
        }
    }

    #name-site {
        color: #555;
        font-size: 12px;
        margin-top: 8px;
    }

    #footer-icons {
        img {
            height: 30px;
            margin-left: 20px;
            filter: sepia(100%) saturate(100%) hue-rotate(20deg);
        }
    }
`;