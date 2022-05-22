import React from "react"
import { View, Text, TouchableOpacity, Image, } from "react-native"
import styles from "../../styles/signUpScreenStyle"
const  GoogleIcon  = require('../../assets/GoogleIcon.png')
const FacebookLogo = require("../../assets/facebookLogo.png")
const SignUpScreen  = ()=>{
    return <>
    <View style={styles.container} >
        <View style={{
            marginTop:100
        }} >
        <Text style={styles.heroText} >Welcome back!  </Text>
        <Text style={styles.heroText}>
        Sign up to continue!
        </Text>
        </View  > 
       
        <View  style={{
            marginTop : 20,
            alignItems : 'center'
        }} >
 <TouchableOpacity style={styles.loginButton} >
<Image source={GoogleIcon} >
</Image>
<Text style={styles.loginButtonInnerText} >
        Sign up With Google
</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} >
<Image source={FacebookLogo} >
</Image>
<Text style={styles.loginButtonInnerText} >
        Sign up With Facebook
</Text>
            </TouchableOpacity>

            <Text style={{
            textAlign : 'center',
            fontSize:20,
            marginTop:20
        }} >
            or
        </Text>

        <TouchableOpacity style={styles.loginButton} >

<Text style={styles.loginButtonInnerText} >
        Sign up With Email
</Text>
            </TouchableOpacity>
        </View>

        <View>
        
        <Text style={{
            textAlign : 'center',
            fontSize:18,
            padding:20,
            marginTop:20
        }} >
            By signing up you are agreed with our friendly terms and condition.
        </Text>



            <Text 
            style={{
                textAlign : 'center',
                fontSize:18,
                padding:20,
                marginTop:20,
                fontWeight:'500'
            }}
            >Already have an account ? </Text>


            <Text 
             style={{
                textAlign : 'center',
                fontSize:18,
                padding:20,
                marginTop:20,
                color : "#265AE8",
                fontWeight:'500'
            }}
            >
                Sign In
            </Text>

        </View>
        
    </View>
    </>
}

export default SignUpScreen