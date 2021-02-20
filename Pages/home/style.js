import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  titulo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold"
  },
  btn: {
    backgroundColor: "#ffb703",
    width: 250,
    height: 50,
    padding: 8,
    marginTop: 12,  
    borderRadius: 30 
  },
  texto: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 1,
    // backgroundColor : '#0080ff'
    backgroundColor: 'rgba(0, 191, 255, 0.4 )',
    height: '60%',
  },
  title: {
    textAlign: 'center', 
    marginVertical: 37,
    fontSize: 26,

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 0,
    marginTop: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  img: {
    
    width: '100%',
    height: 250,
    padding: 8,
    marginTop: 12,  
    borderRadius: 30 
  }
  

})

export default styles