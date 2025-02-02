/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const OpcoesLocalizacao = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperButtonsContainer}>
        <TouchableOpacity style={styles.roundButton}>
          {/* <Image src=''></Image> */}
          <Text style={styles.buttonTextSOS}>Latitude: </Text>
          <Text style={styles.buttonTextSOS}>Longitude: </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lowerButtonsContainer}>
        <TouchableOpacity style={styles.rectangularButton}>
          <Text style={styles.buttonText}>Lista de contatos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectangularButton}>
          <Text style={styles.buttonText}>Opções de localização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectangularButton}>
          <Text style={styles.buttonText}>Editar meus dados</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  upperButtonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100
  },
  lowerButtonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 30,
    margin: 50,
    height: 300,
    justifyContent: 'space-around'
  },
  roundButton: {
    backgroundColor: 'red',
    borderRadius: 90, 
    width: 290,
    height: 230,
    justifyContent: 'center',
  },
  rectangularButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
  },
  buttonTextSOS: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
});

export default OpcoesLocalizacao;
