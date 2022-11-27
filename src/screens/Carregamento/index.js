import { useNavigation } from "@react-navigation/native";
import { Button, Container, Logo } from "./styles";
import imagem from "../../../assets/Logo.png";

export const Carregamento = () => {
  const navigation = useNavigation();

  const screenLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      <Button onPress={screenLogin}>
        <Logo source={imagem} />
      </Button>
    </Container>
  );
};
