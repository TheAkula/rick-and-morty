import { useNavigation as useNativeNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { FilterFieldType } from 'src/modules/filter-context'

export enum FilterRoutes {
  Home = 'Home',
  Select = 'Select',
}

export type FilterParamList = {
  [FilterRoutes.Home]: undefined
  [FilterRoutes.Select]: { title: FilterFieldType }
}

export const useNavigation = () =>
  useNativeNavigation<
    NativeStackNavigationProp<FilterParamList, FilterRoutes>
  >()
