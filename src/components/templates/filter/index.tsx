import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { FilterFields } from 'src/components/organisms/filterFields'

const Stack = createNativeStackNavigator()

export const Filter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={FilterFields} />
    </Stack.Navigator>
  )
}
