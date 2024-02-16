import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import CalculadoraScreen from "./src/components/screens/calculadoraScreen";
import { styles } from "./src/theme/appTheme";

export default function App(){
  return(
    <SafeAreaView style= {styles.fondo}>     
    <StatusBar 
    backgroundColor='black'
    barStyle="light-content"/> 
      <CalculadoraScreen />        
    </SafeAreaView>      

  )
}