import { useRef, useState,useEffect } from "react"

enum Operator {
    add  = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷'
}


export const useCalculator = () => {

    const [formula, setFormula] = useState('0')

    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    const lastOperation = useRef<Operator>();
    
    useEffect(() => {
        if(lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number} `)
        }
        else{
            setFormula(number)
        }    
        
    }, [number])

    useEffect(() => {
        const subResult = calculateSubResult()
        setPrevNumber(`${subResult}`)
      }, [formula])

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = undefined;
    }

    const toggleSign = () => {
        if(number.includes('-')){
            return setNumber(number.replace('-',''))
        }
        setNumber('-' + number)
    }
    
    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = '';
        if( number.includes('-') ){
            currentSign = '-'
            temporalNumber = number.substring(1)
        }

        if(temporalNumber.length > 1 ){
            return setNumber(currentSign + temporalNumber.slice(0,-1))
        }
        
        if(number.length > 1){
            setNumber(number.slice(0,-1))
        }
        
        if(number.length <= 1){
            setNumber('0')
        }
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);
        lastOperation.current = undefined;
        setNumber(`${result}`)
        setPrevNumber('0')
    }

    const buildNumber = (numberString : string) =>{
        // verificar si ya existe el punto decimal 
        if(number.includes('.') && numberString === '.')return;

        if(number.includes('0') ||  number.startsWith('-0')){
            if( numberString === '.' ){
                return setNumber(number + '.');
            }

            //Evaluar si es otro cero y no hay punto
            if(numberString === '0' && number.includes('.')){
                return setNumber(number + numberString);
            }

            //Evaluar si es diferente de cero, no hay punto y es el primer numero.
            if(numberString !== '0' && !number.includes('.')){
                return setNumber(numberString)
            }
            
            //Evitar el 0000000.00
            if(numberString === '0' && !number.includes('.')) return;            
        }
        setNumber(number + numberString)
    }

    const setLastNumber = () => {
    
        if(number.endsWith('.')){
            setPrevNumber(number.slice(0,-1));
        }
        setPrevNumber(number);
        setNumber('0')
    }


    const divideOperation = () =>{
        lastOperation.current = Operator.divide
        setLastNumber()
    }
    const multiplyOperation = () =>{
        lastOperation.current = Operator.multiply
        setLastNumber()
    }
    const subtractOperation = () =>{
        lastOperation.current = Operator.subtract
        setLastNumber()
    }
    const addOperation = () =>{
        lastOperation.current = Operator.add
        setLastNumber()
    }

    const calculateSubResult = () =>{
        const [firstValue , operation , secondValue ] = formula.split(' ')
        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if(isNaN(num2)) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2
            case Operator.divide:
                if(num2 === 0) return 'Error';
                return num1 / num2;
            default:
                throw new Error(`Operation ${operation} not implemented`);
        }
    }
    return {
        //props
        formula,
        number,
        prevNumber,
        //methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        addOperation,
        multiplyOperation,
        subtractOperation,
        calculateResult
    }
}
