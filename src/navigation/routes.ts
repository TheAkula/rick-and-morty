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
  CharacterDetailScreen = 'CharacterDetailScreen',
  LocationDetailScreen = 'LocationDetailScreen',
  EpisodeDetailScreen = 'EpisodeDetailScreen',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
