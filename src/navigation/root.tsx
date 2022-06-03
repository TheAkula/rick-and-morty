import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BackButton } from 'src/components/atoms/backButton'
import { StyledText } from 'src/components/atoms/text'
import { Character } from 'src/modules/character'
import { EpisodeDetail } from 'src/modules/episode'
import { Location } from 'src/modules/location'
import { baseTheme } from 'src/theme/base'
import { getDetailTitle } from 'src/utils/getDetailTitle'

import { Filter } from '../modules/filter'
import { RootStack, Routes } from './routes'
import { TabBar } from './tabbar'

const Stack = createNativeStackNavigator<RootStack>()

export const RootNavigation = () => {
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
          screenOptions={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => (
              <BackButton pressed={() => navigation.goBack()} />
            ),
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
            options={({ route }) => ({
              title: route.params ? getDetailTitle(route.params.name) : '',
            })}
          />
          <Stack.Screen
            name={Routes.LocationDetailScreen}
            component={Location}
            options={({ route }) => ({
              title: route.params ? getDetailTitle(route.params.name) : '',
            })}
          />
          <Stack.Screen
            name={Routes.EpisodeDetailScreen}
            component={EpisodeDetail}
            options={({ route }) => ({
              title: route.params ? getDetailTitle(route.params.name) : '',
            })}
          />
        </Stack.Group>
      </Stack.Navigator>
    </React.Fragment>
  )
}
