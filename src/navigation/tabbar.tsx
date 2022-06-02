import React from 'react'
import { View } from 'react-native'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { useNavigation as useNativeNavigation } from '@react-navigation/native'

import { Header } from 'src/components/molecules/header'
import { CharactersScreen } from 'src/modules/characters'
import { EpisodesScreen } from 'src/modules/episodes'
import { LocationsScreen } from 'src/modules/locations'
import { baseTheme } from 'src/theme/base'

import CharacterIcon from '../../assets/images/icons/character.svg'
import CharacterActiveIcon from '../../assets/images/icons/character-active.svg'
import EpisodeIcon from '../../assets/images/icons/episode.svg'
import EpisodeActiveIcon from '../../assets/images/icons/episode-active.svg'
import LocationIcon from '../../assets/images/icons/location.svg'
import LocationActiveIcon from '../../assets/images/icons/location-active.svg'

enum TabRoutes {
  Episode = 'EpisodeScreen',
  Character = 'CharacterScreen',
  Location = 'LocationScreen',
}

type TabParamList = {
  [TabRoutes.Character]: undefined
  [TabRoutes.Episode]: undefined
  [TabRoutes.Location]: undefined
}

export const useNavigation = () =>
  useNativeNavigation<BottomTabNavigationProp<TabParamList, TabRoutes>>()

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabRoutes.Character}
      sceneContainerStyle={{
        backgroundColor: baseTheme.colors.basic.white,
      }}
      screenOptions={{
        header: (props) => <Header {...props} />,
        tabBarStyle: {
          shadowColor: 'transparent',
          backgroundColor: baseTheme.colors.basic.headerBg,
          borderColor: baseTheme.colors.basic.gray,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '500',
        },
        tabBarInactiveTintColor: baseTheme.colors.graybase.gray1,
        tabBarActiveTintColor: baseTheme.colors.primary,
      }}>
      <Tab.Screen
        name={TabRoutes.Character}
        component={CharactersScreen}
        options={{
          title: 'Character',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <CharacterActiveIcon width={28} height={28} />
              </View>
            ) : (
              <View>
                <CharacterIcon width={28} height={28} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name={TabRoutes.Location}
        component={LocationsScreen}
        options={{
          title: 'Location',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <LocationActiveIcon width={28} height={28} />
              </View>
            ) : (
              <View>
                <LocationIcon width={28} height={28} />
              </View>
            ),
        }}
      />

      <Tab.Screen
        name={TabRoutes.Episode}
        component={EpisodesScreen}
        options={{
          title: 'Episode',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <EpisodeActiveIcon width={28} height={28} />
              </View>
            ) : (
              <View>
                <EpisodeIcon width={28} height={28} />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  )
}
