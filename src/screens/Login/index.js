import {  TouchableOpacity } from "react-native-web";
import { ButtonText, Container, ContainerText, SubTitle, Title,ContainerOptions,ViewTitulo,IconClaro } from "./styles";
import imagem from "../../../assets/iconClaro.png";

export const Login = () => {
  return (
    <Container>
      
      <ViewTitulo>
      <IconClaro source={imagem} />
      <ContainerText>
        <Title>Acesse o</Title>
        <Title>Minha Claro móvel</Title>
        <Title>ou faça seu cadastro</Title>
        <SubTitle>
          Entre com suas credenciais ou acesse automaticamente desligando o
          WI-FI.
        </SubTitle>
      </ContainerText>
      </ViewTitulo>

      

      <ContainerOptions>
      <TouchableOpacity styles={{borderStyle: 'solid',
  borderColor: 'black'

      }}>
        <ButtonText>Entrar automaticamente                   {">"} </ButtonText>
        
      </TouchableOpacity>
      
      <TouchableOpacity>
        <ButtonText>Entrar com cpf ou email                   {">"} </ButtonText>
      </TouchableOpacity>
      <TouchableOpacity>
        <ButtonText>Quero me cadastrar                          {">"} </ButtonText>
      </TouchableOpacity>
      <TouchableOpacity>
        <ButtonText>Ver fatura sem cadastro                    {">"} </ButtonText>
      </TouchableOpacity>
      </ContainerOptions>
    </Container>
  );
};
