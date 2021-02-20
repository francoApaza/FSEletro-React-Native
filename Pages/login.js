import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import FullStackEletro from '../assets/FullStackEletro.png'

export default function Login ({navigation}){
    return(
        <View style={style.fundo}>
            <View style={style.div}>               
                <Image style={style.logo} source={FullStackEletro} ></Image>

                <Text style={style.corTexto}>Email : </Text>
                <TextInput style={style.input} placeholder="Digite aqui!">
                
                </TextInput>

                <Text style={style.corTexto} >Senha : </Text>
                <TextInput style={style.input} secureTextEntry={true} placeholder="Digite aqui!">

                </TextInput>

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}> Entrar </Text>
                </TouchableOpacity>

               <TouchableOpacity onPress={()=>{navigation.navigate('Cadastro')}}>
                    <Text style={style.textlogin}>Ainda não tem uma conta ? Clique aqui!</Text>
               </TouchableOpacity>

               
               <Text style={style.textlogin}> Esqueceu a senha ? </Text>
                
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    fundo: {
        flex : 1,
        backgroundColor: 'rgba(0, 191, 255, 0.4 )',
        alignItems: 'center',
        justifyContent: 'center',
        },
    div : {
        borderRadius : 16,
        backgroundColor : "#fff",
        width : "80%",
        height : 400,
        alignItems: 'center',

    },
    logo : {
        resizeMode : 'stretch',
        width : "65%",
        height : "30%",
        marginTop : 15
        
    },
    input : {
        width : "80%",
        height: 32,
        borderStyle : "solid",
        borderColor : "#867979",
        borderWidth : 1,
        borderRadius : 10,
    },
    corTexto :{
        color : "#0066ff",
        marginRight : "60%",
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 5,

    },
    textlogin : {
        color : "#0080ff",
        fontSize : 15,
        marginTop: 16,
        marginEnd: 0,
    },
    button : {
        margin : 15,
        alignItems: 'center',
        borderRadius : 10,
        backgroundColor : "#0080ff",
        width : "80%",
        height : 32,
    },
    buttonText:{
        color : "white",
        paddingTop : 4,
        alignContent: 'center'
    }
    })

