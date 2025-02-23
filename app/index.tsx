import { View } from 'react-native'
import CalculatorButton from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { useCalculator } from '@/hooks/useCalculator'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/globalStyles'

const index = () => {
  const {
    formula,
    buildNumber,
    prevNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    addOperation,
    subtractOperation,
    multiplyOperation,
    calculateResult,
    number
  } = useCalculator()
  return (
    <View style={globalStyles.calculatorContainer}>

      {/* {results} */}
      <View style={{ paddingBottom: 30, marginBottom: 20 }}>
        <ThemeText variant='h1'>{formula}</ThemeText>
        {
          formula === prevNumber
            ? <ThemeText variant='h2'></ThemeText>
            : <ThemeText variant='h2'>{prevNumber}</ThemeText>
        }
      </View>
      {/* Numbers Rows */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={clean}
          color={Colors.lightGray}
          blackText
          label='C' />
        <CalculatorButton
          onPress={toggleSign}
          blackText
          color={Colors.lightGray}
          label='+/-' />
        <CalculatorButton
          onPress={deleteLast}
          blackText
          color={Colors.lightGray}
          label='del' />
        <CalculatorButton
          onPress={divideOperation}
          label='÷'
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='7' onPress={() => buildNumber('7')} />
        <CalculatorButton label='8' onPress={() => buildNumber('8')} />
        <CalculatorButton label='9' onPress={() => buildNumber('9')} />
        <CalculatorButton
          onPress={multiplyOperation}
          label='x'
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='4' onPress={() => buildNumber('4')} />
        <CalculatorButton label='5' onPress={() => buildNumber('5')} />
        <CalculatorButton label='6' onPress={() => buildNumber('6')} />
        <CalculatorButton
          onPress={subtractOperation}
          label='-'
          color={Colors.orange}
        />
      </View>


      <View style={globalStyles.row}>
        <CalculatorButton label='1' onPress={() => buildNumber('1')} />
        <CalculatorButton label='2' onPress={() => buildNumber('2')} />
        <CalculatorButton label='3' onPress={() => buildNumber('3')} />
        <CalculatorButton
          onPress={addOperation}
          label='+'
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='0' doubleSize onPress={() => buildNumber('0')} />
        <CalculatorButton label='.' onPress={() => buildNumber('.')} />
        <CalculatorButton
          onPress={calculateResult}
          label='='
          color={Colors.orange}
        />
      </View>

    </View>
  )
}

export default index

