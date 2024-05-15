
import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
const Register = ({ navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const handleSubmit=async()=>{
        setLoading(true);
        try {
         const {data}=await axios.post(`/auth/register`,{name,email,password,phone})   
         if(data?.success){
            setLoading(false)
            navigation.navigate('Login');
         }
        } catch (error) {
            setLoading(false)
            console.warn(error)
        }
    }
  return (
    <View style={styles.container}>
    <Text style={styles.maintitle}>Register</Text>
    <Text style={styles.label}>Name</Text>
     <TextInput style={styles.textinput} value={name} onChangeText={(text)=>setName(text)}/>
     <Text style={styles.label} >Email</Text>
     <TextInput style={styles.textinput} value={email} onChangeText={(text)=>setEmail(text)} keyboardType='email-address'/>
     <Text style={styles.label}>Phone</Text>
     <TextInput style={styles.textinput} value={phone} onChangeText={(text)=>setPhone(text)} />
     <Text style={styles.label}>Pasword</Text>
     <TextInput style={styles.textinput} secureTextEntry value={password} onChangeText={(text)=>setPassword(text)}/>
     <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnTitle}>{loading?"Submitting...":"Register"}</Text>
     </TouchableOpacity>
     <Text style={styles.alredy}>If you are already registered <Text style={{color:'green'}} onPress={() => navigation.navigate("Login")}>LOGIN</Text></Text>
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
export default Register