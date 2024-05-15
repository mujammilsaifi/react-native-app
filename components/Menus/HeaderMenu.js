import { useContext } from 'react'
import {StyleSheet,TouchableOpacity, View} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { AuthContext } from '../../context/authContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HeaderMenu = () => {
    const [auth,setAuth]=useContext(AuthContext)
    const handlelogOut=async()=>{
        setAuth({user:null,token:''});
        await AsyncStorage.removeItem('@auth');
        alert("Logout Successfully!");
    }
  return (
    <View>
        <TouchableOpacity onPress={handlelogOut}>
        <FontAwesome5 name='sign-out-alt' style={styles.iconStyle}/>
        </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    iconStyle:{
        fontSize:22,
        fontWeight:'600',
        textAlign:'center'
    }
})

export default HeaderMenu