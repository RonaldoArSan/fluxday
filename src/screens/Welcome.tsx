import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,  
} from "react-native";
import React from "react";

import { COLORS, SIZES } from "../constants";

import welcomeImg from '../assets/welcome.jpg';
import Button from "../components/Button";

const Welcome = () => {
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Controle seus{"\n"} medicamentos {"\n"} de forma facil
      </Text>

      <Image source={welcomeImg} style={styles.img} />
      <Text style={styles.subtitle}>
        Lembre-se de Tomar seu medicamentos na hora certa, isso e muito
        importante para seu tratamento
      </Text>
      <Button title="INICIAR" />
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily:'regular',
    fontSize: 32,
    textAlign: "center",
    color: COLORS.tertiary,
  },

  subtitle: {
    fontFamily:'light',
    textAlign: "center",
    fontSize: SIZES.medium,
    paddingHorizontal: SIZES.large,
    color: COLORS.primary,
    padding: 5,
  },
  img: {
    width: '100%',
    height: 528,
   
  },
});
