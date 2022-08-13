import React from "react";
import Styled from "styled-components";

export const Box = Styled.div`
  background-color:#F78154;
  display:flex;
  flex-direction:column;
  text-align:center;
`;

export const TitleFicha = Styled.h1`
 font-family: "Bebas Neue", cursive;
`;

export const Title = Styled.h2`
 font-family: "Bebas Neue", cursive;
`;

export const Paragraph = Styled.p`
font-family: "Bebas Neue", cursive;
`;

export default class Ficha extends React.Component {
  render() {
    return (
      <Box>
        <TitleFicha>{this.props.titulo}</TitleFicha>
        <Title>Nome: {this.props.nome}</Title>
        <Paragraph>Idade: {this.props.idade}</Paragraph>
        <Paragraph>Quero estudar: {this.props.estudar}</Paragraph>
      </Box>
    );
  }
}
