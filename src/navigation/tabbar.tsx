import React from 'react'
import { View } from 'react-native'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { useNavigation as useNativeNavigation } from '@react-navigation/native'

import { Header } from 'src/components/molecules/header'
import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { colors } from 'src/theme/colors'

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
        backgroundColor: colors.basic.white,
      }}
      screenOptions={{
        header: (props) => <Header {...props} />,
        tabBarStyle: {
          shadowColor: 'transparent',
          backgroundColor: colors.basic.headerBg,
          borderColor: colors.basic.gray,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '500',
        },
        tabBarInactiveTintColor: colors.graybase.gray1,
        tabBarActiveTintColor: colors.primary,
      }}>
      <Tab.Screen
        name={TabRoutes.Character}
        component={CharacterScreen}
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
        component={LocationScreen}
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
        component={EpisodeScreen}
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
