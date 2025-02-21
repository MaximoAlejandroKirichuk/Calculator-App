import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/globalStyles';
import {  Text, Pressable } from 'react-native'

interface Props{
    label: string;
    color?: string;
    blackText?: boolean;

    //methods
    onPress: () => void
}

const CalculatorButton = ({label,onPress,color,blackText = false} : Props) => {
  return (
    <Pressable 
        style={globalStyles.button}
        onPress={onPress}    
    >
      <Text 
        style={{
            ...globalStyles.buttonText,
            color: blackText ? 'black' : 'white'
        }
        }
        >
        {label}
    </Text>
    </Pressable>
  )
}

export default CalculatorButton