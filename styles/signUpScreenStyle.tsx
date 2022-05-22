import {StyleSheet} from  "react-native"

const styles  = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        marginTop:0
    },
    heroText : {
        fontSize : 35,
        fontFamily : 'PlusJakartaBold',
        textAlign : 'center',
        fontWeight : "900"
    },

    loginButton : {
        display : 'flex',
        flexDirection :'row',
        justifyContent : 'space-evenly',
        width : '80%',
        backgroundColor : "#EDEEF0",
        height : 70,
        alignItems : 'center',
        marginTop:10,
        borderRadius:10,
        fontSize:30
    },

    loginButtonInnerText: {
        fontSize:18
    }
    

})

export default styles