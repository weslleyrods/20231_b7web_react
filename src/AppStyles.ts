import styled from "styled-components";

type PropsContainer={
  bg: string;
}
export const Container = styled.div<PropsContainer>`
  max-width: 600px;
  display: flex;
  background-color: ${props=>props.bg};
  color: black;
  margin: 5px;

  span{
    font-weight: bold;
    color: pink;
  }

  .link{
    color: white; 
    &:hover{
      color: purple;
    }
  }

  @media(max-width: 500px){
    background-color: yellow;
    flex-direction: column;

    span{
      color: cyan;
    }
  }

`;

type PropsStyledButton = {
  bg: string;
  small?: boolean;
}
export const ButtonStyled = styled.button<PropsStyledButton>`
  font-size: ${(props) => props.small ? '15px': '30px'};  
  background-color: ${(props) => props.bg}
`