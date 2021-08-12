import React from 'react';
import {  Button, Image } from "react-native";
import { Page, HeaderText, ScreenButtonArea, ScreenButton, ButtonText } from "./style";
import { useNavigation } from '@react-navigation/core';

export default function Home() {
    const navigation = useNavigation();
    const handlePressButton1Lei = () => {
        navigation.navigate("PrimeiraLeiOhm");
    }
 return (
   <Page>
       <HeaderText>Eletro Result</HeaderText>
       <ScreenButtonArea>
            <ScreenButton onPress = {handlePressButton1Lei}>
                <Image 
                    source = {require("../../../../assets/1LeiOhm.png")}
                    style = {{width: 110, height: 100}}
                />
                <ButtonText>1º Lei de Ohm</ButtonText>
            </ScreenButton>
            <ScreenButton />
            <ScreenButton />
            <ScreenButton />
            <ScreenButton />
            <ScreenButton />
       </ScreenButtonArea>
       
       
   </Page>
  );
}