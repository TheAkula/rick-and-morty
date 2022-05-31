import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CharactersTemplate } from 'src/components/templates/characters'

const Stack = createNativeStackNavigator()

export const CharacterScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}>
      <Stack.Screen name="Home" component={CharactersTemplate} />
    </Stack.Navigator>
  )
}
