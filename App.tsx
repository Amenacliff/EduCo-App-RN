import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import IntroScreen from './screens/OnboardingScreens/introScreen';
import { useFonts } from 'expo-font';
import SignUpScreen from './screens/SignUpScreen';

export default function App() {

  let [fontLoaded, error] = useFonts({
    'PlusJakartaReg' : require('./font/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaBold' : require('./font/PlusJakartaSans-SemiBold.ttf')
})
  const Stack = createNativeStackNavigator()
  
  return (
    fontLoaded === true ? 
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='introScreen' >
        <Stack.Screen name="introScreen" options={{
        headerShown : false ,
        gestureEnabled : true,
        animation:'slide_from_right'
        }}  component={IntroScreen} />      
        <Stack.Screen name="introScreenTwo" options={{
        headerShown : false,
        gestureEnabled : true,
        animation:'slide_from_right'
        }}  component={IntroScreen} />      
        <Stack.Screen name="introScreenThree" options={{
        headerShown : false,
        gestureEnabled : true,
        animation:'slide_from_right'
        }}  component={IntroScreen} /> 
        <Stack.Screen name="signUpScreen" options={{
        headerShown : false,
        gestureEnabled : true,
        animation:'slide_from_right'
        }}  component={SignUpScreen} />      
      </Stack.Navigator>
    </NavigationContainer>
     : <View></View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
