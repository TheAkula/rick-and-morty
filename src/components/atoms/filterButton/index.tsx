import React from 'react'
import { useLinkTo } from '@react-navigation/native'

import { colors } from 'src/theme/colors'
import { StyledText } from 'src/theme/styles'

import { FilterContainer } from './styled'

export const FilterButton = () => {
  const linkTo = useLinkTo()

  const onPressed = () => {
    linkTo('/Filter')
  }

  return (
    <FilterContainer>
      <StyledText
        size={17}
        color={colors.primary}
        onPress={onPressed}
        weight="black">
        Filter
      </StyledText>
    </FilterContainer>
  )
}
