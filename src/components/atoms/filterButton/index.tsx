import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { StyledText } from 'src/components/atoms/text'
import { ScreenTypes, useFilterContext } from 'src/modules/filter-context'
import { RootStackScreenProps, Routes } from 'src/navigation/routes'
import { baseTheme } from 'src/theme/base'
import { isEmptyObject } from 'src/utils/isEmptyObject'

import { FilterActive, FilterContainer } from './styled'

interface FilterButtonProps {
  type: ScreenTypes
}

export const FilterButton: React.FC<FilterButtonProps> = ({ type }) => {
  const navigation =
    useNavigation<RootStackScreenProps<Routes.MainNavigator>['navigation']>()
  const { updateType, appliedFields } = useFilterContext()

  const onPressed = () => {
    updateType(type)
    navigation.navigate(Routes.FilterScreen)
  }

  return (
    <FilterContainer>
      {!isEmptyObject(appliedFields[type]) && <FilterActive />}
      <StyledText
        color={baseTheme.colors.primary}
        onPress={onPressed}
        weight="black">
        Filter
      </StyledText>
    </FilterContainer>
  )
}
