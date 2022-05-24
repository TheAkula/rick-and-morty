import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { filterHeader } from 'src/components/molecules/filterHeader'
import { FilterFields } from 'src/components/organisms/filterFields'

const Stack = createNativeStackNavigator()

export const Filter = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: filterHeader, statusBarHidden: true }}>
      <Stack.Screen name="Home" component={FilterFields} />
    </Stack.Navigator>
  )
}
