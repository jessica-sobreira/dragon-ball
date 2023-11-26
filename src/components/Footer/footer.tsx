import { FooterStyled } from './style.ts';

import InstagramIcone from "/src/assets/images/instagram.png";
import FacebookIcone from "/src/assets/images/facebook.png";
import TwitterIcone from "/src/assets/images/twitter.png";


export const FooterSite = () => {
    return (
        <FooterStyled>
            <div>
                <div id="footer-links">
                    <span>Sobre</span>
                    <span className="divisor">•</span>
                    <span>Contato</span>
                    <span className="divisor">•</span>
                    <span>Termos de uso</span>
                    <span className="divisor">•</span>
                    <span>Privacidade</span>
                </div>
                <p id="name-site"> Jéssica Sobreira 2023.</p>
            </div>
            <div id="footer-icons">
                <img src={FacebookIcone}  />
                <img src={InstagramIcone}  />
                <img src={TwitterIcone}  />
            </div>
        </FooterStyled>
    );
};
