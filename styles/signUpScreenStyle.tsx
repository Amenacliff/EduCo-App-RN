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
        width : '90%',
        backgroundColor : "#EDEEF0",
        height : 70,
        alignItems : 'center',
        marginTop:10,
        borderRadius:10,
        fontSize:30
    },

    loginButtonInnerText: {
        fontSize:18
    },

    loginActionButtonText : {
        color : 'white',
        fontSize : 20,
        textAlign : 'center'
    },

    inputField : {
        width : '90%',
        padding : 20,
        fontSize:20,
        marginTop :10
    },

    horizontalLine : {
        borderBottomColor : 'gray',
        borderBottomWidth : 1,
        width : '90%',
        alignSelf : 'center'
    },
    loginActionButton : {
        backgroundColor : '#265AE8',
        height : 65,
        marginTop :25,
        width : 350,
        padding:18,
        borderRadius:10
    },
    

})

export default styles