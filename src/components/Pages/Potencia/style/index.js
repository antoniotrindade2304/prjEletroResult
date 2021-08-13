import React from "react";
import styled from "styled-components/native";

export const Page = styled.SafeAreaView`
  flex: 1;
  background-color: #222;
  align-items: center;
`
export const HeaderArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
`
export const HeaderButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: #333;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: -80px;
`

export const HeaderText = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`

export const ButtonArea = styled.View`
  flex-direction: row;
  margin-top: 15px;
`

export const OperationButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: #111;
  border: ${props => props.active ? "2px solid white" : "none"};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`
export const OperationButtonText = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  
`
export const IdxButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: #333;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
`


export const InputNumber = styled.TextInput`
  margin-top: 20px;
  width: 250px;
  height: 50px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #333;
  font-size: 20px;
  padding: 10px;
  color: #fff;
`

export const PickerArea = styled.View`
  width: 78px;
  height: 50px;
  background-color: #333;
  margin-top: 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const InputArea = styled.View`
  flex-direction: row;
  align-self: flex-start;
  margin-left: 20px;

`

export const UnitText = styled.Text`
  color: #fff;
  font-size: 25px; 
  font-weight: bold; 
  margin-top: 30px;
  margin-left: 10px;
`

export const ResultArea = styled.View`
  width: 90%;
  height: 75px;
  margin-top: 20px;
  background-color: #333;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`
export const ResultAreaText = styled.Text`
  color: white;
  font-size: 50px;
`