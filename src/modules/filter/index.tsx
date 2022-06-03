import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BackButton } from 'src/components/atoms/backButton'
import { StyledText } from 'src/components/atoms/text'
import { FilterFields } from 'src/components/organisms/filterFields'
import { FilterSelect } from 'src/components/organisms/filterSelect'
import { useFilterContext } from 'src/modules/filter-context'
import {
  FilterRoutes,
  RootStackScreenProps,
  Routes,
} from 'src/navigation/routes'
import { baseTheme } from 'src/theme/base'
import { Button } from 'src/ui/button'
import { isEmptyObject } from 'src/utils/isEmptyObject'

const Stack = createNativeStackNavigator()

export const Filter = ({
  navigation,
}: RootStackScreenProps<Routes.FilterScreen>) => {
  const { apply, fields, clearFields, type } = useFilterContext()

  const onApply = () => {
    apply()
    navigation.goBack()
  }

  const onClearHandler = () => {
    clearFields()
  }

  return (
    <Stack.Navigator
      screenOptions={{
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
          backgroundColor: baseTheme.colors.basic.white,
        },
      }}>
      <Stack.Screen
        name={FilterRoutes.Home}
        component={FilterFields}
        options={{
          title: 'Filter',
          headerRight: () => <Button title="APPLY" onPress={onApply} />,
          headerLeft: () =>
            type && !isEmptyObject(fields[type]) ? (
              <StyledText
                color={baseTheme.colors.primary}
                onPress={onClearHandler}>
                Clear
              </StyledText>
            ) : (
              <View />
            ),
        }}
      />
      <Stack.Screen
        name={FilterRoutes.Select}
        component={FilterSelect}
        options={(props) => {
          const title = props.route.params
            ? ((props.route.params as { title: string }).title as string)
            : ''

          return {
            statusBarHidden: true,
            headerLeft: () => (
              <BackButton pressed={() => props.navigation.goBack()} />
            ),
            title: title ? title[0].toUpperCase() + title.slice(1) : '',
          }
        }}
      />
    </Stack.Navigator>
  )
}
