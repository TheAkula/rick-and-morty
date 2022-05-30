import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Filter } from 'src/components/templates/filter'
import { useAlertContext } from 'src/modules/alert-context'
import { Alert } from 'src/ui/alert'

import { Routes } from './routes'
import { TabBar } from './tabbar'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  const { visible } = useAlertContext()

  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Routes.MainNavigator}>
        <Stack.Screen name={Routes.MainNavigator} component={TabBar} />
        <Stack.Screen name={Routes.FilterScreen} component={Filter} />
      </Stack.Navigator>
      {visible && <Alert />}
    </React.Fragment>
  )
}
