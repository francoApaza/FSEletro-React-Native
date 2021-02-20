import React from 'react';
import { Text, View, ImageBackground, Button , SafeAreaView, ScrollResponderEvent } from 'react-native';
import styles from './style';

import logoHome from '../../assets/logoHome.png';


const Separator = () => (
  <View style={styles.separator} />
);


function Home({navigation}){
  return (
      <SafeAreaView style={styles.container}>

        <View>
          <Text style={styles.title}>
            Seja bem vindo! 
          </Text>
        </View>
        
      
        <View>
          <Text style={styles.title}>
            Aqui temos descontos  para programadores !!
          </Text>
          <ImageBackground style={styles.img} source={logoHome}>

          </ImageBackground>

          <View style={styles.fixToText}>
            <Button
              title="Produtos"
              // onPress={() => Alert.alert('Left button pressed')}
              onPress={()=>{navigation.navigate('Loja')}}
            />
            <Button
              title="Login"
              onPress={()=>{navigation.navigate('Login')}}
            />
          </View>
        </View>

        
      </SafeAreaView>
     
  )
}
export default Home;