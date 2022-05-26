import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BackButton } from 'src/components/atoms/backButton'
import { StyledText } from 'src/components/atoms/text'
import { Characters } from 'src/components/organisms/characters'
import { Character } from 'src/components/templates/character'
import { useNavigation } from 'src/navigation/routes'

const Stack = createNativeStackNavigator()

export const CharacterScreen = () => {
  const navigation = useNavigation()

  const onGoBack = () => {
    navigation.goBack()
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}>
      <Stack.Screen name="Home" component={Characters} />
      <Stack.Screen
        name="CharacterDetail"
        component={Character}
        options={{
          headerLeft: () => <BackButton pressed={onGoBack} />,
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <StyledText size={15} weight="black">
              {props.children}
            </StyledText>
          ),
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}
