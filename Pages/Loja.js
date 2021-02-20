import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,StatusBar, SafeAreaView, FlatList, Button, ScrollView} from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      categoria: 'geladeira',
      imagem: 'geladeira_personalizada.jpg',
      produto: 'Geladeira personalizada free Side inverse 540',
      preco: '6399.00',
      precofinal: '5019.00',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      categoria: 'geladeira',
      imagem: 'geladeira_electrolux.jpg',
      produto: 'Geladeira Electrolux Infinity DF8 2 Frost Fre',
      preco: '4500.00' ,
      precofinal: '3999.00',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoria: 'geladeira',
      imagem: 'geladeira_consul.jpg',
      produto: 'Geladeira Consul Frost Free Duplex 405 litros',
      preco: '5500.00' ,
      precofinal: '4999.00',
      

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      categoria: 'fogao',
      imagem: 'fogao_esmaltec.jpg',
      produto: 'Fogão de Piso 4 Bocas Esmaltec Preto, Acendim',
      preco: '2500.00',
      precofinal:'2299.00' ,
      

    },

    {
      id: "60248caf0715f9064cc885a8",
      categoria: 'fogao',
      imagem: 'fogao_electrolux.jpg',
      produto: 'Fogão 5 Bocas Electrolux Prata Automático com',
      preco: '4399.00',
      precofinal:'3019.00',
      
    },
    {
      id: '602499936257b602fc3057e6',
      categoria: 'lavadora',
      imagem: 'lavadoura_philco.jpg',
      produto: 'Lavadora de Roupas Philco Inverter 12KG PLR12',
      preco: '6399.00',
      precofinal: '5019.00',

    },
    {
      id: '6025672f6ed99c2d84a7c034',
      categoria: 'lavadora',
      imagem: 'lavadoura_samsung.jpg',
      produto: 'Lava & Seca Samsung WD4000 de 10.2kg',
      preco: '4500.00',
      precofinal: '3999.00',
    },
    {
      id: '602567616ed99c2d84a7c035',
      categoria: 'lava-louca',
      imagem: 'lava_louca_facilite.jpg',
      produto: 'Lava-louças pra família pequena Facilite sua ',
      preco: '12300.00',
      precofinal: '11999.00',
    },
    {
      id: '602568f7a6dc3f2964350225',
      categoria: 'lava-louca',
      imagem: 'lava_louca_electrolux.jpg',
      produto: 'Electrolux Lava-Louças Inox 14 Serviços (LV14',
      preco: '5500.00',
      precofinal: '5500.00',
    },
    {
      id: '60257d344f3d4815508076f0',
      categoria: 'micro-ondas',
      imagem: 'micro_ondas_morphy.jpg',
      produto: 'Micro-ondas MORPHY RICHARDS 20 L',
      preco: '4500.00',
      precofinal: '3999.00',
    },
    {
      id: '60257ef118ed562f903369e0',
      categoria: 'micro-ondas',
      imagem: 'micro_ondas_electrolux.jpg',
      produto: 'Micro-ondas Electrolux 27 L , Função Tira Odo',
      preco:  '3500.00',
      precofinal: '2999.00',
    },
    {
      id: '602599de3848ef220071bb5e',
      categoria: 'micro-ondas',
      imagem: 'micro_ondas_philco.jpg',
      produto: 'Micro-ondas Philco 30 Litros PME31',
      preco: '4900.00',
      precofinal: '4399.00',
    },
   
  ];
  
  const Item = ({ categoria, imagem, produto, preco, precofinal }) => (
    <View style={styles.item}>
      
      <Text style={styles.title}>{categoria}</Text>
      <Text style={styles.prod}>img {imagem}</Text>
      <Text style={styles.prod}>Descrição do produto: {produto}</Text>
      <Text style={styles.prod}>preço: {preco}</Text>
      <Text style={styles.prod}>preço promocional:{precofinal}</Text>
      <View style={styles.btncomprar}>
          <Button
              title="Comprar este produto"
              // onPress={()=>{navigation.navigate('Loja')}}
          />
      </View>
        
    </View>
  );
  
  export default function Loja({navigation}) {
    const renderItem = ({ item }) => (
      <Item 
        categoria={item.categoria}
        imagem={item.imagem}
        produto={item.produto}
        preco={item.preco}
        precofinal={item.precofinal}  
      />   
    );
  
    return (
      <ScrollView>
           
          <Text style={styles.titlesite}>Nossos produtos : </Text>
          <SafeAreaView style={styles.container}>
              <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              />
          </SafeAreaView>

          <TouchableOpacity style={styles.buttonHome} onPress={()=>{navigation.navigate('Home')}} >
              <Text style= {{color : 'white'}} >Voltar para Home</Text>
          </TouchableOpacity>
        
      </ScrollView>
        
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'rgba(0, 191, 255, 0.4 )',
    

  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 32,
  },
  titlesite: {
    fontSize: 32,
    backgroundColor: 'rgba(0, 191, 255, 0.4 )',
    paddingBottom: 3,

  },
  prod: {
    fontSize: 16,
  },
  produto: {
  fontSize: 22,
  },
  buttonHome :{
      backgroundColor : "#0080ff",
      width : 160,
      height : 32,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius : 10,
      marginTop: 0,
  },
  btncomprar: {
    // marginLeft:'0%',
    marginTop:0,
    width: 120,
    // marginBottom:80,
    marginTop: 8,
  }

});





























// export default function Game({navigation}){
//     return(
//         <View style={style.view}>
//             {/* <ImageBackground source={backfavela}style={style.container}imageStyle={style.image}> */}
                
//                 {/* <View style={style.personagem}>
//                     <Image source={helio}
//                         style={style.helio}
//                     ></Image>
//                 </View> */}

//                 <Text style={style.talk}>
//                     Oi tudo bem? Prazer sou o Hélio!
//                 </Text>

//             <TouchableOpacity style={style.button}>
//                 <Text style= {{color : 'white'}}>Próximo</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={style.buttonHome} onPress={()=>{navigation.navigate('Home')}} >
//                 <Text style= {{color : 'white'}} >Home</Text>
//             </TouchableOpacity>

//             {/* </ImageBackground> */}
            
            
//         </View>
//     )
// }
// const style = StyleSheet.create({
//     container: {
//       flex: 1,
//         },
//     image : {
//         flex : 1,
//         resizeMode : 'cover'
//     },
//     view : {
//         flex : 1
//     },
//     talk : {
//         backgroundColor : "white",
//         height: "18%",
//         width : "100%",
//         position : "absolute",
//         bottom : 0,
//         borderRadius : 25,
//         fontSize : 20,
//         padding : 20
//     },
//     button : {
//         backgroundColor : "#219EBC",
//         width : "20%",
//         height : "5%",
//         position : "absolute",
//         bottom : 15,
//         marginLeft : "70%",
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius : 10,        
//     },
//     buttonHome :{
//         backgroundColor : "#219EBC",
//         width : "20%",
//         height : "5%",
//         position : "absolute",
//         bottom : "89%",
//         marginLeft : "70%",
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius : 10,
//     },
//     personagem :{
//         position : "absolute",
//         bottom : 0,
//         height : '60%',
//         width : '100%',
//         paddingLeft : '40%',
               
//     },
//     helio :{
//         flex : 1,
//         resizeMode : 'stretch',
//         width : '100%'        
//     }
//   });