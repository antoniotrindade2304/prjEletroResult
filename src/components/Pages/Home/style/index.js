import React from "react";
import styled from "styled-components/native";


export const Page = styled.SafeAreaView`
    flex: 1;
    background-color: #222;
    align-items: center;
`

export const HeaderText = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-top: 20px;
`

export const ScreenButtonArea = styled.View`
 
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const ScreenButton = styled.TouchableOpacity`
    width: 110px;
    height: 100px;
    margin: 40px;
`

export const ButtonText = styled.Text`
    color: white;
    font-size: 20px;
`