/* eslint-disable prettier/prettier */
// src/services/LocationService.ts
import Geolocation from 'react-native-geolocation-service';
import { requestLocationPermission } from '../location/PermissionManager';

interface GeolocationCoordinates {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null | undefined;
  heading: number | null;
  speed: number | null;
}

export interface GeolocationResponse {
  coords: GeolocationCoordinates;
  timestamp: number;
}

export interface GeolocationError {
  code: number;
  message: string;
}

export const getCurrentLocation = async (
  callback: (position: GeolocationResponse | null, error: GeolocationError | null) => void
): Promise<void> => {
  const hasLocationPermission = await requestLocationPermission();

  if (!hasLocationPermission) {
    callback(null, { code: 1, message: 'Permissão de localização negada' });
    return;
  }

  Geolocation.getCurrentPosition(
    (position) => {
      const pos: GeolocationResponse = {
        coords: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          altitude: position.coords.altitude,
          accuracy: position.coords.accuracy,
          altitudeAccuracy: position.coords.altitudeAccuracy,
          heading: position.coords.heading,
          speed: position.coords.speed,
        },
        timestamp: position.timestamp,
      };
      callback(pos, null);
    },
    (error) => {
      const err: GeolocationError = {
        code: error.code,
        message: error.message,
      };
      callback(null, err);
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
      distanceFilter: 0,
      forceRequestLocation: true,
      forceLocationManager: true,
    }
  );
};
