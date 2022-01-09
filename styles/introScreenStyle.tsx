import { StyleSheet } from "react-native";



const styles =  StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:50,
        alignItems : 'center',
        backgroundColor: 'white'
    },
    skipText:{
        color : '#265AE8',
        fontSize : 18,
        marginLeft : '80%',
        fontFamily : 'PlusJakartaBold'
    },
    onboardingImage : {
        display : 'flex',
        marginTop:80,
        justifyContent :'center'
    },
    heroText : {
        fontSize : 35,
        marginTop : 50,
        fontFamily : 'PlusJakartaBold',
        textAlign : 'center',
        padding:20,
        fontWeight : "900"

    },
    heroBodyText : {
        color : '#9FA3A9',
        fontSize : 18,
        paddingLeft:30,
        paddingRight : 30,
        textAlign : 'center',
        fontWeight : '300',
        fontFamily : 'PlusJakartaReg'
    },
    dotViews : {
        display : 'flex',
        flexDirection : 'row',
        paddingTop :30
    },
    registerBtn : {
        backgroundColor : '#265AE8',
        height : 65,
        marginTop :25,
        width : 350,
        padding:15,
        borderRadius:10
    },
    registerText : {
        textAlign : 'center',
        color : 'white',
        fontSize : 23,
        fontFamily : 'PlusJakartaBold'
    },
    loginBtn : {
        backgroundColor : 'white',
        height : 65,
        marginTop :25,
        width : 350,
        padding:15,
        borderRadius:10,
        borderColor: '#9FA3A9',
        borderWidth :1
    },
    loginText : {
        textAlign : 'center',
        color : '#265AE8',
        fontSize : 23,
        fontFamily : 'PlusJakartaBold'
    }
})

export default styles