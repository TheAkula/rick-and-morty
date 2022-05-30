import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BackButton } from 'src/components/atoms/backButton'
import { StyledText } from 'src/components/atoms/text'
import { Character } from 'src/components/templates/character'
import { Filter } from 'src/components/templates/filter'
import { Scalars } from 'src/generated/graphql'
import { useAlertContext } from 'src/modules/alert-context'
import { colors } from 'src/theme/colors'
import { Alert } from 'src/ui/alert'

import { Routes } from './routes'
import { TabBar } from './tabbar'

export type RootStack = {
  [Routes.MainNavigator]: undefined
  [Routes.FilterScreen]: undefined
  [Routes.CharacterDetailScreen]: { id: Scalars['ID']; name: string }
}

const Stack = createNativeStackNavigator<RootStack>()

export const RootNavigation = () => {
  const { visible } = useAlertContext()

  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Routes.MainNavigator}>
        <Stack.Screen name={Routes.MainNavigator} component={TabBar} />
        <Stack.Screen name={Routes.FilterScreen} component={Filter} />
        <Stack.Screen
          name={Routes.CharacterDetailScreen}
          component={Character}
          options={({ navigation, route }) => ({
            contentStyle: {
              backgroundColor: colors.basic.white,
            },
            headerShown: true,
            headerLeft: () => (
              <BackButton pressed={() => navigation.goBack()} />
            ),
            title: route.params.name,
            headerBackVisible: false,
            headerTitleAlign: 'center',
            headerTitle: (props) => (
              <StyledText size={15} weight="black">
                {props.children}
              </StyledText>
            ),
            headerShadowVisible: false,
          })}
        />
      </Stack.Navigator>
      {visible && <Alert />}
    </React.Fragment>
  )
}
