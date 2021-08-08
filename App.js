import React, { useState } from "react";
import styled from "styled-components/native";
import { Picker } from "react-native";


const Page = styled.SafeAreaView`
  flex: 1;
  background-color: #222;
  align-items: center;
`
const HeaderText = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-top: 20px;
`

const ButtonArea = styled.View`
  flex-direction: row;
  margin-top: 15px;
`

const OperationButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: #111;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`
const OperationButtonText = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
`

const InputNumber = styled.TextInput`
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

const PickerArea = styled.View`
  width: 78px;
  height: 50px;
  background-color: #333;
  margin-top: 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

const InputArea = styled.View`
  flex-direction: row;
  align-self: flex-start;
  margin-left: 20px;

`

const UnitText = styled.Text`
  color: #fff;
  font-size: 25px; 
  font-weight: bold; 
  margin-top: 30px;
  margin-left: 10px;
`

function App(){
  const [number1,setNumber1] = useState("");
  const [number2,setNumber2] = useState("");
  const [prefixo1, setPrefixo1] = useState("");
  const [prefixo2, setPrefixo2] = useState("");
  const [unidade1, setUnidade1] = useState("Ω");
  const [unidade2, setUnidade2] = useState("A");
  

  return(
    <Page>
      <HeaderText>1º Lei de Ohm Ω</HeaderText>
      <ButtonArea>
        <OperationButton>
          <OperationButtonText>V</OperationButtonText>
        </OperationButton>
        <OperationButton style = {{marginLeft: 20, marginRight: 20}}>
          <OperationButtonText>R</OperationButtonText>
        </OperationButton>
        <OperationButton>
          <OperationButtonText>I</OperationButtonText>
        </OperationButton>
      </ButtonArea>

      <InputArea>
        <InputNumber 
          value = {number1}
          placeholder = "Digite algum número"
          placeholderTextColor = "#aaa"
          keyboardType = "numeric"
          onChangeText = {(n) => setNumber1(n)}
        />
        <PickerArea>
          <Picker 
            selectedValue = {prefixo1}
            onValueChange={(itemValue, itemIndex) => setPrefixo1(itemValue)}
            style = {{color:"white"}}
            
          >
            <Picker.Item label="T" value={10E+12} />
            <Picker.Item label="G" value={10E+9} />
            <Picker.Item label="M" value={10E+6} />
            <Picker.Item label="K" value={10E+3} />
            <Picker.Item label="-" value={10E0} />
            <Picker.Item label="m" value={10E-3} />
            <Picker.Item label="μ" value={10E-6} />
            <Picker.Item label="n" value={10E-9} />
            <Picker.Item label="p" value={10E-12} />
          </Picker>
        </PickerArea>

        <UnitText>{unidade1}</UnitText>
      </InputArea>
      
      <InputArea>
        <InputNumber 
          value = {number1}
          placeholder = "Digite algum número"
          placeholderTextColor = "#aaa"
          keyboardType = "numeric"
          onChangeText = {(n) => setNumber1(n)}
        />
        <PickerArea>
          <Picker 
            selectedValue = {prefixo2}
            onValueChange={(itemValue, itemIndex) => setPrefixo2(itemValue)}
            style = {{color:"white"}}
            
          >
            <Picker.Item label="T" value={10E+12} />
            <Picker.Item label="G" value={10E+9} />
            <Picker.Item label="M" value={10E+6} />
            <Picker.Item label="K" value={10E+3} />
            <Picker.Item label="-" value={10E0} />
            <Picker.Item label="m" value={10E-3} />
            <Picker.Item label="μ" value={10E-6} />
            <Picker.Item label="n" value={10E-9} />
            <Picker.Item label="p" value={10E-12} />
          </Picker>
        </PickerArea>

        <UnitText>{unidade2}</UnitText>
      </InputArea>
     
      
    </Page>
  );
};

export default App;