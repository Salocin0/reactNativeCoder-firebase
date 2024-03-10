import { StyleSheet, Text,Pressable } from 'react-native'
import { Colors } from '../Styles/Colors'


const SubmitButton = ({title,onPress}) => {
   
  return (
        <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
  )
}


export default SubmitButton


const styles = StyleSheet.create({
    button:{
        width:"60%",
        backgroundColor:Colors.green3,
        padding:10,
        alignItems:"center",
        borderRadius:10
    },
    text:{
        textAlign:"center",
        color:"white",
        fontSize:18
    }
})