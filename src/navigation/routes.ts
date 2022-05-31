import { useNavigation as useNativeNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Scalars } from 'src/generated/graphql'

export enum Routes {
  MainNavigator = 'MainNavigator',
  FilterScreen = 'FilterScreen',
  CharacterDetailScreen = 'CharacterDetailScreen',
  LocationDetailScreen = 'LocationDetailScreen',
  EpisodeDetailScreen = 'EpisodeDetailScreen',
}

export type RootStack = {
  [Routes.MainNavigator]: undefined
  [Routes.FilterScreen]: undefined
  [Routes.CharacterDetailScreen]: { id: Scalars['ID']; name: string }
  [Routes.LocationDetailScreen]: { id: Scalars['ID']; name: string }
  [Routes.EpisodeDetailScreen]: { id: Scalars['ID']; name: string }
}

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<RootStack, Routes>>()
