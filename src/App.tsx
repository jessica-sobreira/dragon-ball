import './App.css'
import { HeadName } from './components/style'
import { IconWithText } from './components/Icon/Icon'
import { FlexSection } from './components/Icon/style'
import { ImageWithText } from './components/ImagesText'
import { ContatoText } from './components/Contato/contato'
import { FooterSite } from './components/Footer/footer'

//icon
import { RiComputerLine } from 'react-icons/ri';
import { PiStackLight } from 'react-icons/pi';
import { BsCheckCircle } from 'react-icons/bs';

//image
import DragonZ from './assets/images/dragonBallZ.png';
import Dragon from './assets/images/dragon-ball.jpg';
import Kakarot from './assets/images/Kakarot.jpg';
import Kame from './assets/images/kame kame ha.jpg';


function App() {

  return (
    <>
    <HeadName src={DragonZ} alt="" />
    

<FlexSection>
    <IconWithText
      icon={<RiComputerLine />}
      title="Assista no desktop"
      text="As esferas do dragão."
      />
      
      <IconWithText
      icon={<PiStackLight />}
      title="Este site tem componentes"
      text="Utiliza o Style Components."
      />

      <IconWithText
      icon={<BsCheckCircle />}
      title="Vou mostrar meu valor"
      text="Energia tenho para usar."
      />
 </FlexSection>

 <ImageWithText
    imgSrc={Dragon}
    title="Oi, eu sou o Goku!"
    reversed
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
    </ImageWithText>

    <ImageWithText
    imgSrc={Kakarot}
    title="Kakaroto, seu verme!"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
    </ImageWithText>

    <ImageWithText
    imgSrc={Kame}
    title="Kame kame ha!"
    reversed
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
    </ImageWithText>

    <ContatoText></ContatoText>

    <FooterSite></FooterSite>

    </>
  )
}

export default App
