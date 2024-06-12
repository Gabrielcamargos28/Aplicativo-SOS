/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// src/pages/OpcaoLocalizacao.tsx
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';
import { getCurrentLocation } from '../../services/location/LocationService';
import { GeolocationResponse, GeolocationError } from '../../services/location/LocationService';

const OpcoesLocalizacao: React.FC = () => {
  const [location, setLocation] = useState<GeolocationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchLocation = () => {
    getCurrentLocation((position, err) => {
      if (err) {
        setError(err.message);
        setLocation(null);
      } else {
        setLocation(position);
        setError(null);
      }
    });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo ao app de localização!</Text>
      {location ? (
        <Text style={styles.location}>
          Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
        </Text>
      ) : (
        <Text style={styles.error}>{error || 'Obtendo localização...'}</Text>
      )}
      <Button title="Atualizar Localização" onPress={fetchLocation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  location: {
    fontSize: 16,
    margin: 10,
  },
  error: {
    fontSize: 16,
    margin: 10,
    color: 'red',
  },
});

export default OpcoesLocalizacao;
