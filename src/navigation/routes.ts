import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

import { Scalars } from 'src/generated/graphql'
import { FilterFieldType } from 'src/modules/filter-context'

export enum Routes {
  MainNavigator = 'MainNavigator',
  FilterScreen = 'FilterScreen',
  CharacterDetailScreen = 'CharacterDetailScreen',
  LocationDetailScreen = 'LocationDetailScreen',
  EpisodeDetailScreen = 'EpisodeDetailScreen',
}

export enum TabRoutes {
  Episode = 'EpisodeScreen',
  Character = 'CharacterScreen',
  Location = 'LocationScreen',
}

type TabParamList = {
  [TabRoutes.Character]: undefined
  [TabRoutes.Episode]: undefined
  [TabRoutes.Location]: undefined
}

export enum FilterRoutes {
  Home = 'Home',
  Select = 'Select',
}

export type FilterParamList = {
  [FilterRoutes.Home]: undefined
  [FilterRoutes.Select]: { title: FilterFieldType }
}

export type RootStack = {
  [Routes.MainNavigator]: BottomTabScreenProps<TabParamList>
  [Routes.FilterScreen]: StackScreenProps<FilterParamList>
  [Routes.CharacterDetailScreen]: { id: Scalars['ID']; name: string }
  [Routes.LocationDetailScreen]: { id: Scalars['ID']; name: string }
  [Routes.EpisodeDetailScreen]: { id: Scalars['ID']; name: string }
}

export type RootStackScreenProps<T extends Routes> = StackScreenProps<
  RootStack,
  T
>
export type HomeTabScreenProps<T extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, T>,
    StackScreenProps<RootStack>
  >

export type FilterScreenProps<T extends keyof FilterParamList> =
  CompositeScreenProps<
    StackScreenProps<FilterParamList, T>,
    StackScreenProps<RootStack>
  >
