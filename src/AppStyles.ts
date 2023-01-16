import styled from "styled-components";

type PropsContainer={
  bg: string;
}
export const Container = styled.div<PropsContainer>`
  background-color: ${props=>props.bg};
  color: black;
  margin: 5px;
`;

type PropsStyledButton = {
  bg: string;
  small?: boolean;
}
export const ButtonStyled = styled.button<PropsStyledButton>`
  font-size: ${(props) => props.small ? '15px': '30px'};  
  background-color: ${(props) => props.bg}
`