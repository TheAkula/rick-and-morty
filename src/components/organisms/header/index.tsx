import React from 'react'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { getHeaderTitle } from '@react-navigation/elements'

import { StyledText } from 'src/theme/styles'

import { StyledTabHeader } from './styled'

export const Header: React.FC<BottomTabHeaderProps> = ({ route, options }) => {
  const title = getHeaderTitle(options, route.name)

  return (
    <StyledTabHeader>
      <StyledText size={34} weight={'bold'}>
        {title}
      </StyledText>
    </StyledTabHeader>
  )
}
