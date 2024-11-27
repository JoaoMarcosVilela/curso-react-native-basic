import React, { useState } from "react"
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
  ScrollView,
} from "react-native"
import { format } from "date-fns"

import colors from "../constants/colors"
import { ConversionInput } from "../components/ConversionInput"
import { Button } from "../components/Button"
import { KeyboardSpacer } from "../components/KeyboardSpacer"

const screen = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  content: {
    paddingTop: screen.height * 0.2,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 10,
  },
})

export default () => {
  const baseCurrency = "USD"
  const quoteCurrency = "GBP"
  const conversionRate = 0.79
  const date = "2024-11-27"

  const [scrollEnabled, setScrollEnabled] = useState(false)
  const [inputDolar, setInputDolar] = useState("")

  const handleTextChange = (text) => {
    setInputDolar(text)
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Conversor de Moeda</Text>
          <View style={styles.inputContainer}>
            <ConversionInput
              text={baseCurrency}
              value={inputDolar}
              onChangeText={handleTextChange}
              onButtonPress={() => alert("todo!")}
              keyboardType="numeric"
              //onChangeText={text => console.log("text", text)}
            />
            <ConversionInput
              text={quoteCurrency}
              value="123"
              editable={false}
              onButtonPress={() => alert("todo!")}
            />
          </View>
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} em ${format(
              new Date(date),
              "MMM do, yyyy"
            )}`}
          </Text>
          <Text style={styles.text}>USD = Dólar americano</Text>
          <Text style={styles.text}>GBP = Libra esterlina</Text>
          <Button text="Reverse Currencies" onPress={() => alert("todo!")} />
          <KeyboardSpacer onToggle={visible => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
    </View>
  )
}