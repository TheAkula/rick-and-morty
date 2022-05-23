import React from 'react'
import { useLinkTo } from '@react-navigation/native'

import { useFilterContext } from 'src/modules/filter-context'
import { colors } from 'src/theme/colors'
import { StyledText } from 'src/theme/styles'

import { FilterContainer } from './styled'

interface FilterButtonProps {
  type: string
}

export const FilterButton: React.FC<FilterButtonProps> = ({ type }) => {
  const linkTo = useLinkTo()
  const { updateType } = useFilterContext()

  const onPressed = () => {
    updateType(type)
    linkTo('/Filter/')
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
