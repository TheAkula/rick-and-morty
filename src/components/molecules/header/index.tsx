import React from 'react'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { getHeaderTitle } from '@react-navigation/elements'

import { FilterButton } from 'src/components/atoms/filterButton'
import { StyledText } from 'src/theme/styles'

import { StyledTabHeader, StyledTabHeaderTitle } from './styled'

export const Header: React.FC<BottomTabHeaderProps> = ({ route, options }) => {
  const title = getHeaderTitle(options, route.name)

  return (
    <StyledTabHeader>
      <StyledTabHeaderTitle>
        <StyledText size={34} weight={'bold'}>
          {title}
        </StyledText>
      </StyledTabHeaderTitle>
      <FilterButton />
    </StyledTabHeader>
  )
}
