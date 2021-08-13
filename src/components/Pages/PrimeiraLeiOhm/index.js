import React, { useState, useEffect } from "react";
import { Page, HeaderArea, HeaderButton, HeaderText, ButtonArea, OperationButton, OperationButtonText, IdxButton, InputNumber, PickerArea, InputArea, UnitText, ResultArea, ResultAreaText } from "./style";
import { Picker, Image } from "react-native";
import { useNavigation } from '@react-navigation/core';

console.disableYellowBox = true;

function PrimeiraLeiOhm(props) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [count, setCount] = useState(4);
  const [result, setResult] = useState(0.00);
  const [prefixo1, setPrefixo1] = useState(1);
  const [prefixo2, setPrefixo2] = useState(1);
  const [unidade1, setUnidade1] = useState("Ω");
  const [unidade2, setUnidade2] = useState("A");
  const [unidadeP, setUnidadeP] = useState("V");
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [placeholder1, setPlaceholder1] = useState("Resistência")
  const [placeholder2, setPlaceholder2] = useState("Corrente")
  const [prefixos, setPrefixos] = useState(["T", "G", "M", "K", "", "m", "μ", "n", "p"]);
  const [casaDecimais, setCasasDecimais] = useState(0);
  const navigation = useNavigation();


  const handlePressButton1 = () => {
    if (!active1) {
      setActive1(true);
      setActive2(false);
      setActive3(false);
    }
    setUnidade1("Ω");
    setUnidade2("A");
    setUnidadeP("V");
    setPlaceholder1("Resistência");
    setPlaceholder2("Corrente");
  }

  const handlePressButton2 = () => {
    if (!active2) {
      setActive1(false);
      setActive2(true);
      setActive3(false);
    }
    setUnidade1("V");
    setUnidade2("A");
    setUnidadeP("Ω");
    setPlaceholder1("Tensão");
    setPlaceholder2("Corrente");
  }

  const handlePressButton3 = () => {
    if (!active3) {
      setActive1(false);
      setActive2(false);
      setActive3(true);
    }
    setUnidade1("V");
    setUnidade2("Ω");
    setUnidadeP("A");
    setPlaceholder1("Tensão");
    setPlaceholder2("Resistência");
  }

  const handleLeftButton = () => {
    if (count > 0) {
      if(Number.isInteger(result/1000)) {
        setCasasDecimais(0);
      }else {
        setCasasDecimais(3);
      }
      setCount(count - 1);
      setResult(result / 1000);
    }
  }

  const handleRightButton = () => {
    if (count < 8) {
      if(Number.isInteger(result*1000)) {
        setCasasDecimais(0);
      }else {
        setCasasDecimais(3);
      }
      setCount(count + 1);
      setResult(result * 1000);
    }
  }

  const homeReturn = () => {
    navigation.goBack();
  }

  useEffect(() => {

    if (number1 !== "" && number2 !== "") {
      if (( number1 == 0 && number2 == 0) || (number2 == 0)) {
        setResult(0);
        setCasasDecimais(0);
      } else if (active1) {
          if(Number.isInteger((number1 * number2) * (prefixo1 * prefixo2))) {
            setCasasDecimais(0);
          }else {
            setCasasDecimais(3);
          }
          setResult((number1 * number2) * (prefixo1 * prefixo2));
          setCount(4);
        } else if (active2) {
          if(Number.isInteger((number1 / number2) * (prefixo1 / prefixo2))) {
            setCasasDecimais(0);
          }else {
            setCasasDecimais(3);
          }
          setResult((number1 / number2) * (prefixo1 / prefixo2));
          setCount(4);
        } else if (active3) {
          if(Number.isInteger((number1 / number2) * (prefixo1 / prefixo2))) {
            setCasasDecimais(0);
          }else {
            setCasasDecimais(3);
          }
          setResult((number1 / number2) * (prefixo1 / prefixo2));
          setCount(4);
        }
    } else {
      setResult(0);
      setCasasDecimais(0);
    }
    
  }, [number1, number2, active1, active2, active3, prefixo1, prefixo2])



  return (
    <Page>
      <HeaderArea>
        <HeaderButton
          onPress={homeReturn}
        >
          <Image
            source={require("../../../../assets/arrow_Right.png")}
            style={{ width: 40, height: 40, rotation: 180, marginLeft: -16 }}
          />
        </HeaderButton>
        <HeaderText>1º Lei de Ohm</HeaderText>
      </HeaderArea>
      
      <ButtonArea>
        <OperationButton
          active={active1}
          onPress={handlePressButton1}
        >
          <OperationButtonText>V</OperationButtonText>
        </OperationButton>
        <OperationButton style={{ marginLeft: 20, marginRight: 20 }}
          active={active2}
          onPress={handlePressButton2}
        >
          <OperationButtonText>R</OperationButtonText>
        </OperationButton>
        <OperationButton
          active={active3}
          onPress={handlePressButton3}
        >
          <OperationButtonText>I</OperationButtonText>
        </OperationButton>
      </ButtonArea>

      <InputArea>
        <InputNumber
          value={number1}
          placeholder={placeholder1}
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          onChangeText={(n) => setNumber1(n)}
        />
        <PickerArea>
          <Picker
            selectedValue={prefixo1}
            onValueChange={(itemValue, itemIndex) => setPrefixo1(itemValue)}
            style={{ color: "white" }}
            itemPosition="4"

          >
            <Picker.Item label="-" value={1} />
            <Picker.Item label="T" value={1E+12} />
            <Picker.Item label="G" value={1E+9} />
            <Picker.Item label="M" value={1E+6} />
            <Picker.Item label="K" value={1E+3} />
            <Picker.Item label="m" value={1E-3} />
            <Picker.Item label="μ" value={1E-6} />
            <Picker.Item label="n" value={1E-9} />
            <Picker.Item label="p" value={1E-12} />
          </Picker>
        </PickerArea>

        <UnitText>{unidade1}</UnitText>
      </InputArea>

      <InputArea>
        <InputNumber
          value={number2}
          placeholder={placeholder2}
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          onChangeText={(n) => setNumber2(n)}
        />
        <PickerArea>
          <Picker
            selectedValue={prefixo2}
            onValueChange={(itemValue, itemIndex) => setPrefixo2(itemValue)}
            style={{ color: "white" }}

          >
            <Picker.Item label="-" value={1} />
            <Picker.Item label="T" value={1E+12} />
            <Picker.Item label="G" value={1E+9} />
            <Picker.Item label="M" value={1E+6} />
            <Picker.Item label="K" value={1E+3} />
            <Picker.Item label="m" value={1E-3} />
            <Picker.Item label="μ" value={1E-6} />
            <Picker.Item label="n" value={1E-9} />
            <Picker.Item label="p" value={1E-12} />
          </Picker>
        </PickerArea>

        <UnitText>{unidade2}</UnitText>
      </InputArea>
      <ResultArea>
        <ResultAreaText>{result.toFixed(casaDecimais)}{prefixos[count]}{unidadeP}</ResultAreaText>
      </ResultArea>

      <ButtonArea>
        <IdxButton
          onPress={handleLeftButton}
        >
          <Image
            source={require("../../../../assets/arrow_Right.png")}
            style={{ width: 40, height: 40, rotation: 180, marginLeft: -12 }}
          />
        </IdxButton>
        <IdxButton
          onPress={handleRightButton}
        >
          <Image
            source={require("../../../../assets/arrow_Right.png")}
            style={{ width: 40, height: 40, marginLeft: 12 }}
          />
        </IdxButton>
      </ButtonArea>



    </Page>
  );
};

export default PrimeiraLeiOhm;