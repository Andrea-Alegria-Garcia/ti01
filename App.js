import React from 'react';
import { Button,View,Text} from 'react-native';
import Login from './screen/login';
import Registro from './screen/registro';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginView({navigation}){
  return(
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Login></Login>
      <Button
    title="Registrar"
    onPress={() => navigation.navigate('Registro')}
    />
    
    </View>
  );
}

function RegistroView() {
  return(
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Registro></Registro>
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView}/>
        <Stack.Screen name="Registro" component={RegistroView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;