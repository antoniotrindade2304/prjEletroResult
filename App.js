import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrimeiraLeiOhm from "./src/components/Pages/PrimeiraLeiOhm";
import Potencia from "./src/components/Pages/Potencia"
import Home from "./src/components/Pages/Home";


const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Home"
          component = {Home}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name = "PrimeiraLeiOhm"
          component = {PrimeiraLeiOhm}
        />
        <Stack.Screen
          name = "Potencia"
          component = {Potencia}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;