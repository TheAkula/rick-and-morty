import React from 'react'
import { View } from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { StyledText } from 'src/theme/styles'

import { StyledFilterHeader } from './styled'

export const filterHeader = ({ route, options }: NativeStackHeaderProps) => {
  const title = getHeaderTitle(options, route.name)

  return (
    <StyledFilterHeader>
      <View>
        <StyledFilterHeader>
          <StyledText size={15} weight="black">
            {title}
          </StyledText>
        </StyledFilterHeader>
      </View>
    </StyledFilterHeader>
  )
}
