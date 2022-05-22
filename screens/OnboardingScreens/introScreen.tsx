import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/introScreenStyle';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
const  firstOnBoardingPicture =  require('../../assets/firstOnboardingImg.png')  
const secondOnboardingImage =  require('../../assets/secondOnBoardingImg.png')
const thirdOnboardingImage =  require('../../assets/thirdOnboardingImg.png')
import type {RootStackParamList} from '../../types/navigation.interface'


const  IntroScreen = () =>{

    type intoScreenProps = NativeStackNavigationProp<RootStackParamList, 'introScreen'>

    const navigation = useNavigation<intoScreenProps>()


    const route =   useRoute()

    const isRouteFirstIntro = route.name === 'introScreen'
    const isRouteSecondIntro = route.name === 'introScreenTwo'
    const isRouteThirdIntro  = route.name === 'introScreenThree'

    const navigateToNextScreen = (nextScreenName : any )=>{
        navigation.navigate(nextScreenName)
    }

    return (
        <View style={styles.container} >
            <Text style={styles.skipText}> {isRouteFirstIntro ? "Skip" : 'skip'}</Text>
            <Image style={styles.onboardingImage} source={isRouteFirstIntro ? firstOnBoardingPicture : isRouteSecondIntro ? secondOnboardingImage : thirdOnboardingImage} />
            <Text style={styles.heroText} >{
                isRouteFirstIntro ? "Better way to learning is calling you!" : isRouteSecondIntro ? "Find yourself  by doing whatever you do !" : `It’s not just learning, It’s a promise!`
            }</Text>
            <Text style={styles.heroBodyText} >Impeet viverra vivamus porttior ules ac vulte lectus velit sen lectus ue </Text>
            {
                isRouteFirstIntro ? <View style={styles.dotViews} >
                <FontAwesome name="dot-circle-o" size={24} color="black" onPress={()=>navigateToNextScreen('introScreen')} />
                <Entypo name="dot-single" size={24} color="#9FA3A9"  onPress={()=>navigateToNextScreen('introScreenTwo')} />
                <Entypo name="dot-single" size={24} color="#9FA3A9" onPress={()=>navigateToNextScreen('introScreenThree')} />
                </View> : isRouteSecondIntro ? <View style={styles.dotViews} >
                <View style={styles.dotViews} >
                <Entypo name="dot-single" size={24} color="#9FA3A9"  onPress={()=>navigateToNextScreen('introScreen')} />
                <FontAwesome name="dot-circle-o" size={24} color="black" onPress={()=>navigateToNextScreen('introScreenTwo')} />
                <Entypo name="dot-single" size={24} color="#9FA3A9" onPress={()=>navigateToNextScreen('introScreenThree')} />
                </View>
            </View> : <View style={styles.dotViews} >
                <Entypo name="dot-single" size={24} color="#9FA3A9"  onPress={()=>navigateToNextScreen('introScreen')} />
                <Entypo name="dot-single" size={24} color="#9FA3A9" onPress={()=>navigateToNextScreen('introScreenTwo')} />
                <FontAwesome name="dot-circle-o" size={24} color="black" onPress={()=>navigateToNextScreen('introScreenThree')} />
                </View>
            }
            

            <View >
                <TouchableOpacity style={styles.registerBtn} 
                onPress={()=>{
                    navigateToNextScreen('signUpScreen')
                }}
                >  
                    <Text style={styles.registerText} >Register</Text>
                </TouchableOpacity  >
                <TouchableOpacity style={styles.loginBtn}
                onPress={()=>{
                    navigateToNextScreen("signInScreen")
                }}
                >  
                    <Text style={styles.loginText} >Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default IntroScreen
