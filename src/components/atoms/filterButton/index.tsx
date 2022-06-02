import React from 'react'

import { StyledText } from 'src/components/atoms/text'
import { ScreenTypes, useFilterContext } from 'src/modules/filter-context'
import { Routes, useNavigation } from 'src/navigation/routes'
import { baseTheme } from 'src/theme/base'
import { isEmptyObject } from 'src/utils/isEmptyObject'

import { FilterActive, FilterContainer } from './styled'

interface FilterButtonProps {
  type: ScreenTypes
}

export const FilterButton: React.FC<FilterButtonProps> = ({ type }) => {
  const navigation = useNavigation()
  const { updateType, appliedFields } = useFilterContext()

  const onPressed = () => {
    updateType(type)
    navigation.navigate(Routes.FilterScreen)
  }

  return (
    <FilterContainer>
      {!isEmptyObject(appliedFields[type]) && <FilterActive />}
      <StyledText
        size={17}
        color={baseTheme.colors.primary}
        onPress={onPressed}
        weight="black">
        Filter
      </StyledText>
    </FilterContainer>
  )
}