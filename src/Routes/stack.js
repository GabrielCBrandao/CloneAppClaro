import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Carregamento } from "../screens/Carregamento";
import { Login } from "../screens/Login";

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    > 
      <Screen name="Carregamento" component={Carregamento} />
      <Screen name="Login" component={Login} />
      
    </Navigator>
  );
};
