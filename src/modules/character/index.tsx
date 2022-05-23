import React from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Characters } from 'src/components/organisms/characters'
import { useGetCharactersQuery } from 'src/generated/graphql'

const Stack = createNativeStackNavigator()

export const CharacterScreen = () => {
  const { loading, error, data } = useGetCharactersQuery()

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}>
      <Stack.Screen name="Home">
        {() => <Characters characters={data?.characters?.results} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
