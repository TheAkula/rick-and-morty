import React from 'react'
import { TouchableOpacity } from 'react-native'

import { StyledText } from 'src/components/atoms/text'
import { Scalars } from 'src/generated/graphql'
import { Routes, useNavigation } from 'src/navigation/routes'
import { baseTheme } from 'src/theme/base'

import { StyledLocationItem } from './styled'

interface LocaitonItemProps {
  type: string
  name: string
  id: Scalars['ID']
}

export const LocationItem: React.FC<LocaitonItemProps> = ({
  type,
  name,
  id,
}) => {
  const navigation = useNavigation()

  const onPressedHandler = () => {
    navigation.push(Routes.LocationDetailScreen, {
      id,
      name,
    })
  }

  return (
    <TouchableOpacity onPress={onPressedHandler}>
      <StyledLocationItem>
        <StyledText size={11} color={baseTheme.colors.basic.lightGray}>
          {type}
        </StyledText>
        <StyledText size={17} weight="black">
          {name}
        </StyledText>
      </StyledLocationItem>
    </TouchableOpacity>
  )
}
