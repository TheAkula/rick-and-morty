import React from 'react'
import { TouchableOpacity } from 'react-native'

import { StyledText } from 'src/components/atoms/text'
import { Scalars } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

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
  const onPressedHandler = () => {}

  return (
    <TouchableOpacity onPress={onPressedHandler}>
      <StyledLocationItem>
        <StyledText size={11} color={colors.basic.lightGray}>
          {type}
        </StyledText>
        <StyledText size={17} weight="black">
          {name}
        </StyledText>
      </StyledLocationItem>
    </TouchableOpacity>
  )
}
