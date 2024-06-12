/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../router';
import { SmsService } from '../../services/sms/SmsService';
import { getCurrentLocation } from '../../services/location/LocationService';

export default function Home() {
  const navigation = useNavigation<StackTypes>();
  const smsService = new SmsService();

  const sendLocationSMS = () => {
    getCurrentLocation((position, error) => {
      if (position) {
        const { latitude, longitude } = position.coords;
        const message = `https://maps.google.com?q=${latitude},${longitude}`;
        smsService.enviarMensagem('+5534988624909', message);
      } else if (error) {
        console.error('Erro ao obter localização', error.message);
      }
    });
  };

  const handleSOSButtonPress = () => {
    sendLocationSMS();
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperButtonsContainer}>
        <TouchableOpacity style={styles.roundButton} onPress={handleSOSButtonPress}>
          <Text style={styles.buttonTextSOS}>SOS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lowerButtonsContainer}>
        <TouchableOpacity style={styles.rectangularButton}>
          <Text style={styles.buttonText}>Lista de contatos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rectangularButton}
          onPress={() => {
            navigation.navigate('OpcoesLocalizacao');
          }}
        >
          <Text style={styles.buttonText}>Opções de localização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectangularButton}>
          <Text style={styles.buttonText}>Editar meus dados</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  upperButtonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  lowerButtonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 30,
    margin: 50,
    height: 300,
    justifyContent: 'space-around',
  },
  roundButton: {
    backgroundColor: 'red',
    borderRadius: 90,
    width: 204,
    height: 197,
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
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
