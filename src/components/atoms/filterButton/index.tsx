import React from 'react'
import { useLinkTo } from '@react-navigation/native'

import { useFilterContext } from 'src/modules/filter-context'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { StyledText } from 'src/components/atoms/text'

import { FilterContainer } from './styled'

interface FilterButtonProps {
  type: string
}

export const FilterButton: React.FC<FilterButtonProps> = ({ type }) => {
  const linkTo = useLinkTo()
  const navigation = useNavigation()
  const { updateType } = useFilterContext()

  const onPressed = () => {
    updateType(type)
    navigation.navigate('Filter', {
      screen: 'Home',
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
