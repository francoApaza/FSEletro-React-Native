import React, {useState} from 'react';
import { View, TextInput, ScrollView, Text, TouchableOpacity, Button,  } from 'react-native';

import styles from './style';

function Cadastro({navigation}) {
   
  const [isSelected, setSelected] = useState(false)
  const [isSelected2, setSelected2] = useState(false)
  const [isSelected3, setSelected3] = useState(false)
   
  return (
    <ScrollView>
      
      
    <View style={styles.fundo}>

      <View style={styles.container}>

        <View>
         <Text style={styles.titulo}> Cadastro</Text>
        </View>
        
        <View style={styles.margin}>
          <Text style={styles.text} >Nome:</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome aqui !"/>   
        </View>

        <View>
          <Text style={styles.text}>E-mail:</Text>
          <TextInput style={styles.input} placeholder="Digite seu email aqui !"/>
        </View>
        <View>
          <Text style={styles.text}>Telefone:</Text>
          <TextInput style={styles.input} placeholder="(11)00000-0000"/>
        </View>
        <View>
          <Text style={styles.text}>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry={true} placeholder="Crie uma senha!"/>
        </View>
        <View>
          <Text style={styles.text}>Confirme a senha:</Text>
          <TextInput style={styles.input}  secureTextEntry={true} placeholder="Confirme sua senha aqui!" />
        </View>

        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Game')}}>
            <Text style={styles.cadastrar}>Cadastrar</Text>          
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
          <Text style={styles.textcadastro}>Você ja tem conta?  clique aqui! </Text>
        </TouchableOpacity>

   
      </View>
      
      <View style={styles.btnprodutos}>
          <Button
              title="Produtos"
              onPress={()=>{navigation.navigate('Loja')}}
          />
      </View>

     
      </View>
    </ScrollView>
  )
  
}

export default Cadastro;