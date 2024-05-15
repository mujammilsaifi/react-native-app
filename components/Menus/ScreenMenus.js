import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import Register from '../authScreens/Register';
import Login from '../authScreens/Login';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import HeaderMenu from './HeaderMenu';
import Account from '../Account';
import About from '../About';
import Post from '../Post';
import MyPost from '../MyPost';

const ScreenMenus = () => {    
    const [auth]=useContext(AuthContext)
    const Stack = createNativeStackNavigator();
    const authenticatedUser=auth?.user && auth.token;
    return (     
        <Stack.Navigator initialRouteName="Register">
            {authenticatedUser?(
                <>
            <Stack.Screen name="Home" component={Home} options={{title:'Full StackApp',headerRight:()=><HeaderMenu/>}}/>
            <Stack.Screen name="Post" component={Post} options={{headerRight:'back',headerRight:()=><HeaderMenu/>}}/>
            <Stack.Screen name="MyPost" component={MyPost} options={{headerRight:'back',headerRight:()=><HeaderMenu/>}}/>
            <Stack.Screen name="About" component={About} options={{headerRight:'back',headerRight:()=><HeaderMenu/>}}/>
            <Stack.Screen name="Account" component={Account} options={{headerRight:'back',headerRight:()=><HeaderMenu/>}}/>
            

         </>            
        ):(
                <>
                <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
                </>
            )}
        
        </Stack.Navigator>
    );
}

export default ScreenMenus