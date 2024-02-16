import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export default function useCalculadora(){
    const [oldNumber, setOldNumber] = useState('0');
    const [numero, setNumero] = useState('0');

    const clean = ()=>{
        setNumero('0');
        setOldNumber('0');
    }

    const ultimaOperacion = useRef<Operadores> ()

    const buildNumber = (numeroTexto: string)=> {  
        
         // No aceptar doble punto
         if( numero.includes('.') && numeroTexto === '.' ) return;

         if ( numero.startsWith('0') || numero.startsWith('-0') ) {
 
             // Punto decimal
             if ( numeroTexto === '.' ) {
                 setNumero( numero + numeroTexto );
 
                 // Evaluar si es otro cero, y hay un punto
             } else if( numeroTexto === '0' && numero.includes('.')  ) {
                 setNumero( numero + numeroTexto );
 
                 // Evaluar si es diferente de cero y no tiene un punto
             } else if( numeroTexto !== '0' && !numero.includes('.') ) {
                 setNumero( numeroTexto );
 
                 // Evitar 0000.0
             } else if( numeroTexto === '0' && !numero.includes('.') ) {
                 setNumero( numero );
             } else {
                 setNumero( numero + numeroTexto ); 
             }
 
         } else {
             setNumero( numero + numeroTexto );
         }
    }

    const cambiarNumPorAnterior = ()=> {
        if(numero.endsWith('.')){
            setOldNumber(numero.slice(0, -1))
        }else {
         setOldNumber(numero);   
        }        
        setNumero('0');


    }

    const btnDividir = ()=> {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.dividir; 

    }
    const btnMultiplicar = ()=> {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar; 

    }
    const btnSumar = ()=> {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.sumar; 

    }
    const btnRestar = ()=> {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.restar; 

    }

    const getResult = ()=> {
        if(oldNumber == '0' && ultimaOperacion.current == Operadores.dividir) return
        
        const n1 = Number(numero); 
        const n2 = Number(oldNumber); 

        switch(ultimaOperacion.current){
            case Operadores.sumar: 
                setNumero(`${n1+n2}`);
                break; 
            case Operadores.restar: 
                setNumero(`${n2-n1}`);
                break; 
            case Operadores.multiplicar: 
                setNumero(`${n1*n2}`);
                break; 
            case Operadores.dividir:                
                setNumero(`${n2/n1}`);
                break;
            default: 
                break;                
        }
        setOldNumber('0');
    }

    const deleteLastNumber = ()=> {
        const newNumber = numero.slice(0, -1)
        if(!newNumber.length || newNumber == '-') return setNumero('0');
        setNumero(newNumber)
    }

    const positiveOrNegative = ()=> {
        if(numero.includes('-')){
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-'+ numero.replace('-',''))
        }
    }
   return {
    oldNumber, numero, clean, positiveOrNegative, deleteLastNumber,
    btnDividir, buildNumber, btnMultiplicar, btnRestar, getResult, btnSumar
   }
}