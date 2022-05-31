import React from 'react'

import { StyledText } from 'src/components/atoms/text'
import { ScreenTypes, useFilterContext } from 'src/modules/filter-context'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
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
    navigation.goBack()
  }

  return (
    <FilterContainer>
      {!isEmptyObject(appliedFields[type]) && <FilterActive />}
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
