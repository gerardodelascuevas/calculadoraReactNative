import { Text, View } from "react-native";
import { styles } from "../../theme/appTheme";
import BotonCalc from "./BotonCalc";
import useCalculadora from "../../hooks/useCalculadora";

export default function CalculadoraScreen(){
   const { oldNumber, btnSumar, numero, clean, positiveOrNegative, deleteLastNumber,
    btnDividir, buildNumber, btnMultiplicar, btnRestar, getResult} = useCalculadora();

    return(
        <View style={styles.calculadoraContainer}>
           { ( oldNumber !== '0' ) && 
            (<Text style={styles.resultadoPequeno}> {oldNumber} </Text>)}
            <Text style={styles.resultado} 
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            > {(numero)} </Text>
            <View style={styles.fila}> 
            
            <BotonCalc text='C'color='#9b9b9b' action={clean}/>
            <BotonCalc text='+/-' color='#9b9b9b' action={positiveOrNegative}/>
            <BotonCalc text='del' color='#9b9b9b' action={deleteLastNumber}/>
            <BotonCalc text='/' color='#ff9427' action={btnDividir}/>
            
            </View>
            <View style={styles.fila}> 
            
            <BotonCalc text='7'action={buildNumber}/>
            <BotonCalc text='8' action={buildNumber}/>
            <BotonCalc text='9' action={buildNumber}/>
            <BotonCalc text='x' color='#ff9427'action={btnMultiplicar}/>
            
            </View>
            <View style={styles.fila}> 
            
            <BotonCalc text='4'action={buildNumber}/>
            <BotonCalc text='5' action={buildNumber}/>
            <BotonCalc text='6' action={buildNumber}/>
            <BotonCalc text='+' color='#ff9427' action={btnSumar}/>
            
            </View>
            <View style={styles.fila}> 
            
            <BotonCalc text='1' action={buildNumber}/>
            <BotonCalc text='2' action={buildNumber}/>
            <BotonCalc text='3' action={buildNumber}/>
            <BotonCalc text='-' color='#ff9427' action={btnRestar}/>
            
            </View>
            <View style={styles.fila}> 
            
            <BotonCalc text='0' ancho action={buildNumber}/>
            
            <BotonCalc text='.' action={buildNumber}/>
            <BotonCalc text='=' color='#ff9427' action={getResult}/>
            
            </View>           

        </View>
    )
}