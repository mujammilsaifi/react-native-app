import React,{ createContext,useEffect,useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [auth, setAuth] = useState({
        token:'',
        user:null
    });
    axios.defaults.baseURL='https://app-backend-n7bc.onrender.com/api/v1';
    axios.defaults.headers.common['Authorization'] =`Bearer ${auth.token}`;
    useEffect(() => {
        const setAuthData=async()=>{
            const jsonValue = await AsyncStorage.getItem('@auth');
            const parseData=JSON.parse(jsonValue);
            setAuth({...auth,token:parseData?.token,user:parseData?.user})
        }
        setAuthData();
    }, [])

    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext,AuthProvider}