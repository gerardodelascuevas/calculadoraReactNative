import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../theme/appTheme";

interface Props{
    text: string,
    color?: string,
    ancho?: boolean,
    action: (text: string)=> void,
}

export default function BotonCalc({text, color= '#2d2d2d', ancho = false, action }: Props){
    return (
        <TouchableOpacity 
            onPress={()=> action(text)}
        > 
            <View style={{...styles.boton, 
            backgroundColor: color, 
            width: ancho ? 180 : 80            
            }}>
                <View> 
                    <Text style={styles.botonTexto}> {text} </Text>                   
                </View>
            </View>
        </TouchableOpacity>
    )
}