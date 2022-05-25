import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { FilterBack } from 'src/components/atoms/filterBack'
import { StyledText } from 'src/components/atoms/text'
import { FilterFields } from 'src/components/organisms/filterFields'
import { FilterSelect } from 'src/components/organisms/filterSelect'
import { useFilterContext } from 'src/modules/filter-context'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { isEmptyObject } from 'src/utils/isEmptyObject'

const Stack = createNativeStackNavigator()

export const Filter = () => {
  const { apply, fields, clearFields } = useFilterContext()
  const navigation = useNavigation()

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
        statusBarHidden: true,
        headerTitle: (props) => (
          <StyledText size={15} weight="black">
            {props.children}
          </StyledText>
        ),
        headerTitleAlign: 'center',
        contentStyle: {
          backgroundColor: colors.basic.white,
          paddingTop: 20,
        },
        headerShadowVisible: false,
        headerBackVisible: false,
      }}>
      <Stack.Screen
        name="FilterHome"
        component={FilterFields}
        options={{
          title: 'Filter',
          headerRight: () => <Button title="APPLY" onPress={onApply} />,
          headerLeft: () =>
            fields && isEmptyObject(fields) ? (
              <StyledText
                size={17}
                color={colors.primary}
                onPress={onClearHandler}>
                Clear
              </StyledText>
            ) : (
              <View />
            ),
        }}
      />
      <Stack.Screen
        name="Select"
        component={FilterSelect}
        options={{
          headerLeft: () => <FilterBack />,
        }}
      />
    </Stack.Navigator>
  )
}
