import CalculatorButton from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { globalStyles } from '@/styles/globalStyles'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingBottom: 30, marginBottom: 20}}>
        <ThemeText variant='h1'>50 x 50</ThemeText>
        <ThemeText variant='h2'>50 x 50</ThemeText>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='C'/>
        <CalculatorButton label='+/-'/>
        <CalculatorButton label=''/>
        <CalculatorButton label=''/>
 
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})