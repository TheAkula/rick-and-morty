import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'

export enum Routes {
  EpisodeScreen = 'EpisodeScreen',
  CharacterScreen = 'CharacterScreen',
  MainNavigator = 'MainNavigator',
  LocationScreen = 'LocationScreen',
  FilterScreen = 'FilterScreen',
  CharacterDetailScreen = 'CharacterDetail',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
