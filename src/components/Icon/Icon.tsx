import React from "react";
import { Container, IconContainer } from "./style";

interface IIconWithText {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export function IconWithText (props: IIconWithText) {
    return (
        <Container>
            <IconContainer>{props.icon}</IconContainer>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </Container>
    );
}