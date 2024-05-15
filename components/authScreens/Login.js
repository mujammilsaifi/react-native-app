import axios from 'axios';
import { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/authContext';
const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [auth,setAuth]=useContext(AuthContext);
    const handleSubmit=async()=>{
        setLoading(true);
        try {
         const {data}=await axios.post(`/auth/login`,{email,password})   
         if(data?.success){
            setLoading(false)
            setAuth(data);
            await AsyncStorage.setItem('@auth', JSON.stringify(data));
            navigation.navigate("Home");
         }
        } catch (error) {
            setLoading(false)
            console.warn(error)
        }
    }
  return (
    <View style={styles.container}>
    <Text style={styles.maintitle}>Login</Text>
     <Text style={styles.label}>Email</Text>
     <TextInput onChangeText={text=>setEmail(text)} style={styles.textinput} keyboardType='email-address'/>
     <Text style={styles.label}>Pasword</Text>
     <TextInput onChangeText={text=>setPassword(text)} style={styles.textinput} secureTextEntry/>
     <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnTitle}>{loading?"Login...":"Login"}</Text>
     </TouchableOpacity>
     <Text style={styles.alredy}>If you are not registered <Text style={{color:"red"}} onPress={() => navigation.navigate("Register")}>REGISTER</Text></Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#800080",
        padding:20
    },
    maintitle:{
        fontSize:25,
        fontWeight:"600",
        textAlign:"center",
        marginBottom:10
    },
    label:{
        fontSize:18,
        fontWeight:"500",
        marginBottom:10,
        marginTop:10
    },
    textinput:{
    borderColor:"black",
    borderWidth:1,
    padding:5,
    backgroundColor:"white",
    borderRadius:5,
    fontSize:17
    },btn:{
        padding:10,
        backgroundColor:"black",
        marginTop:15,
        borderRadius:10
    },btnTitle:{
        textAlign:"center",
        color:"white",
        fontSize:18
    },alredy:{fontSize:17,fontWeight:'600',marginTop:7}
})
export default Login