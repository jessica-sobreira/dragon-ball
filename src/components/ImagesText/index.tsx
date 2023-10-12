import { ImageContainer } from "./style";
import { Container2 } from "./style";

interface IImageWithText {
    imgSrc: string;
    title: string;
    reversed?: boolean;
    children: React.ReactNode;
}

export function ImageWithText(props: IImageWithText) {
    return (
        <Container2 reversed={props.reversed}>
            <ImageContainer src={props.imgSrc}></ImageContainer>

            <div className="content">
                <h1 className="title">{props.title}</h1>
                {props.children}
            </div>
        </Container2>
        
    );
}