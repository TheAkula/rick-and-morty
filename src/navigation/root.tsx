import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BackButton } from 'src/components/atoms/backButton'
import { StyledText } from 'src/components/atoms/text'
import { useAlertContext } from 'src/modules/alert-context'
import { Character } from 'src/modules/character'
import { EpisodeDetail } from 'src/modules/episode'
import { Location } from 'src/modules/location'
import { baseTheme } from 'src/theme/base'
import { Alert } from 'src/ui/alert'
import { getDetailTitle } from 'src/utils/getDetailTitle'

import { Filter } from '../modules/filter'
import { RootStack, Routes } from './routes'
import { TabBar } from './tabbar'

const Stack = createNativeStackNavigator<RootStack>()

export const RootNavigation = () => {
  const { visible } = useAlertContext()

  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: baseTheme.colors.basic.white,
          },
        }}
        initialRouteName={Routes.MainNavigator}>
        <Stack.Screen name={Routes.MainNavigator} component={TabBar} />
        <Stack.Screen name={Routes.FilterScreen} component={Filter} />
        <Stack.Group
          screenOptions={({ navigation, route }) => ({
            headerShown: true,
            headerLeft: () => (
              <BackButton pressed={() => navigation.goBack()} />
            ),
            title: route.params ? getDetailTitle(route.params.name) : '',
            headerBackVisible: false,
            headerTitleAlign: 'center',
            headerTitle: (props) => (
              <StyledText size={15} weight="black">
                {props.children}
              </StyledText>
            ),
          })}>
          <Stack.Screen
            name={Routes.CharacterDetailScreen}
            component={Character}
            //!!! TYPE_ERROR FIXME: !!!
          />
          <Stack.Screen
            name={Routes.LocationDetailScreen}
            component={Location}
          />
          <Stack.Screen
            name={Routes.EpisodeDetailScreen}
            component={EpisodeDetail}
          />
        </Stack.Group>
      </Stack.Navigator>
      {visible && <Alert />}
    </React.Fragment>
  )
}
