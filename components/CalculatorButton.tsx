import { Text, Pressable } from 'react-native'
import * as Haptics from 'expo-haptics';
import { globalStyles } from '@/styles/globalStyles';
import { Colors } from '@/constants/Colors';
interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?:boolean;
  //methods
  onPress: () => void
}

const CalculatorButton = ({ label, onPress, color = Colors.darkGray, blackText = false, doubleSize }: Props) => {
  return (
    <Pressable
      style={({pressed}) =>({
        ...globalStyles.button,
        backgroundColor: color,
        opacity : pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      }

      )}
      onPress={() => {
        Haptics.impactAsync()
        
        onPress()
      }

      }
    >
      <Text
        style={{
          ...globalStyles.buttonText,//agarra los styles de las constantes
          color: blackText ? 'black' : 'white',
          textAlign: doubleSize ? 'left' : 'center', 
          paddingLeft: doubleSize ? 20 : 0
        }
        }
      >
        {label}
      </Text>
    </Pressable>
  )
}

export default CalculatorButton