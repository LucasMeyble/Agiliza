import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_200ExtraLight } from '@expo-google-fonts/montserrat';
import { Roboto_400Regular, Roboto_100Thin, Roboto_300Light } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';



export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_200ExtraLight,
    Roboto_400Regular,
    Roboto_100Thin,
    Roboto_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
