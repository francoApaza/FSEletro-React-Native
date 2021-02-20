import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 fundo: {
   width: "100%",
   height: "100%",   
   alignItems: "center",
   backgroundColor: 'rgba(0, 191, 255, 0.4 )',

 },
 container: {
   alignItems:"center",
   width: 300,
   height: 550,
   backgroundColor: "#fff",
   borderRadius: 20,   
   marginBottom: 20,
   marginTop: 50,

 },

 titulo: {
   marginTop: 25,
   fontSize: 30,
  color: "#0066ff",

   fontWeight: "bold",
 },
 margin: {
  marginTop: 20,
 },

 text: {
  margin: 8,
  padding: 0,
  fontSize: 15,
  color: "#0066ff",
  fontWeight: "bold"

 },
 input: {
   backgroundColor: "#fff",
   width: 240,
   margin: 2,
   borderWidth: 0.3,
   borderRadius: 10,
   height: 32,
   borderColor : "#867979",
  },
 btn: {
  backgroundColor : "#0080ff",
  width: '80%',
  height: 40,
  padding: 8,
  marginTop: 12,  
  borderRadius: 30,
  
 },
 cadastrar: {
   color: "#fff",
   fontWeight: "bold",
   fontSize: 18,
   textAlign: 'center'
 },
 box: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  
 },

 textcadastro : {
  color : "#0080ff",
  fontSize : 15,
  marginTop: 16,
  marginEnd: 0,  
},
btnprodutos: {
  marginLeft:'0%',
  marginTop:0,
  marginBottom:80,

},
});

export default styles