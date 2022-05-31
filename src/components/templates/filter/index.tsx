import React from 'react'
import { View } from 'react-native'
import { useNavigation as useNativeNavigation } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { BackButton } from 'src/components/atoms/backButton'
import { StyledText } from 'src/components/atoms/text'
import { FilterFields } from 'src/components/organisms/filterFields'
import { FilterSelect } from 'src/components/organisms/filterSelect'
import { useFilterContext } from 'src/modules/filter-context'
import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { isEmptyObject } from 'src/utils/isEmptyObject'

const Stack = createNativeStackNavigator()

export enum FilterRoutes {
  Home = 'Home',
  Select = 'Select',
}

type FilterParamList = {
  [FilterRoutes.Home]: undefined
  [FilterRoutes.Select]: { title: string }
}

export const useNavigation = () =>
  useNativeNavigation<
    NativeStackNavigationProp<FilterParamList, FilterRoutes>
  >()

export const Filter = () => {
  const { apply, fields, clearFields, type } = useFilterContext()
  const navigation = useNavigation()

  const onApply = () => {
    apply()
    navigation.goBack()
  }

  const onClearHandler = () => {
    clearFields()
  }

  const onGoBack = () => navigation.goBack()

  return (
    <Stack.Navigator
      screenOptions={{
        statusBarHidden: true,
        headerTitle: (props) => (
          <StyledText size={15} weight="black">
            {props.children}
          </StyledText>
        ),
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerBackVisible: false,
        contentStyle: {
          paddingTop: 20,
          backgroundColor: colors.basic.white,
        },
      }}>
      <Stack.Screen
        name={FilterRoutes.Home}
        component={FilterFields}
        options={() => ({
          title: 'Filter',
          headerRight: () => <Button title="APPLY" onPress={onApply} />,
          headerLeft: () =>
            type && !isEmptyObject(fields[type]) ? (
              <StyledText
                size={17}
                color={colors.primary}
                onPress={onClearHandler}>
                Clear
              </StyledText>
            ) : (
              <View />
            ),
        })}
      />
      <Stack.Screen
        name={FilterRoutes.Select}
        component={FilterSelect}
        options={({ route }) => {
          const title = route.params
            ? ((route.params as { title: string }).title as string)
            : ''

          return {
            headerLeft: () => <BackButton pressed={onGoBack} />,
            title: title ? title[0].toUpperCase() + title.slice(1) : '',
          }
        }}
      />
    </Stack.Navigator>
  )
}
