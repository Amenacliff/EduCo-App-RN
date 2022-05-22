import React from "react"
import { View, Text, TouchableOpacity, Image,  } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import styles from "../../styles/signUpScreenStyle"
const  GoogleIcon  = require('../../assets/GoogleIcon.png')
const FacebookLogo = require("../../assets/facebookLogo.png")


const SignInScreen  = ()=>{
    return <>
    <View style={styles.container} >
        <View style={{
            marginTop:100
        }} >
        <Text style={styles.heroText} >Welcome back!  </Text>
        <Text style={styles.heroText}>
        Sign in to continue!
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
        Sign in With Google
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

       </View>

       <View>
           <TextInput style={styles.inputField} placeholder="username" >

           </TextInput>

           <View style={styles.horizontalLine} >

           </View>

           <TextInput style={styles.inputField} placeholder="password" >

           </TextInput>

           <View style={styles.horizontalLine} >

           </View>
           
       </View>

       <TouchableOpacity style={{...styles.loginActionButton, alignSelf:'center', marginTop:35}}   >
           <Text style={styles.loginActionButtonText}  >
               Login
           </Text>
       </TouchableOpacity>

       <Text 
             style={{
                textAlign : 'center',
                fontSize:18,
                padding:20,
                marginTop:20,
                color : "#265AE8",
                fontWeight:'600'
            }}
            >
                Forgotten Password
            </Text>
        
    </View>
    </>
}

export default SignInScreen