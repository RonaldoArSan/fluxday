import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,  
  Dimensions,
  TouchableOpacity
} from "react-native";
import React from "react";

import { COLORS, SIZES } from "../constants";

import welcomeImg from '../assets/welcome.jpg';


const Welcome = () => {
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Controle seus{"\n"} medicamentos {"\n"} de forma facil
      </Text>

      <Image source ={{uri: welcomeImg}} 
      style={styles.img}
      resizeMode="contain"
       />
      <Text style={styles.subtitle}>
        Lembre-se de Tomar seu medicamentos na hora certa, isso e muito
        importante para seu tratamento
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontFamily:'regular',
    fontSize: 30,
    textAlign: "center",
    color: COLORS.primary,
    paddingTop:15
  },

  subtitle: {
    fontFamily:'light',
    textAlign: "center",
    fontSize: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    color: COLORS.primary,
    padding: 5,
  },
  img: {
       height: Dimensions.get('window').width * 0.9,
      
  },

  button: {
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xSmall,
    height: 56,
    paddingHorizontal:10
    
},
buttonText: {
    color:COLORS.lightWhite,
    fontSize:SIZES.xLarge

}
});
