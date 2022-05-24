import React from 'react'

import { StyledText } from 'src/components/atoms/text'
import { useFilterContext } from 'src/modules/filter-context'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

import { FilterContainer } from './styled'

interface FilterButtonProps {
  type: string
}

export const FilterButton: React.FC<FilterButtonProps> = ({ type }) => {
  const navigation = useNavigation()
  const { updateType } = useFilterContext()

  const onPressed = () => {
    updateType(type)
    navigation.navigate('Filter', {
      screen: 'FilterHome',
      params: {
        type,
      },
    })
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
