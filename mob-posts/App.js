import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import Auth from './src/auth'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Stack = createNativeStackNavigator()

function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts Screen</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Make a Post</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Posts" component={PostsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
