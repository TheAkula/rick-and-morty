import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BackButton } from 'src/components/atoms/backButton'
import { StyledText } from 'src/components/atoms/text'
import { FilterFields } from 'src/components/organisms/filterFields'
import { FilterSelect } from 'src/components/organisms/filterSelect'
import { useFilterContext } from 'src/modules/filter-context'
import { useNavigation } from 'src/navigation/routes'
import { Routes } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { isEmptyObject } from 'src/utils/isEmptyObject'

const Stack = createNativeStackNavigator()

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

  const onGoBack = () =>
    navigation.navigate(Routes.FilterScreen, {
      screen: 'FilterHome',
    })

  return (
    <Stack.Navigator
      screenOptions={{
        statusBarHidden: true,
        headerTitle: (props) => (
          <StyledText size={15} weight="black">
            {props.children}
          </StyledText>
        ),
        contentStyle: {
          backgroundColor: colors.basic.white,
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerBackVisible: false,
      }}>
      <Stack.Screen
        name="FilterHome"
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
          contentStyle: {
            paddingTop: 20,
            backgroundColor: colors.basic.white,
          },
        })}
      />
      <Stack.Screen
        name="Select"
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
