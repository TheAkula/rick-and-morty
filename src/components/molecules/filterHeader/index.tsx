import React from 'react'
import { getHeaderTitle } from '@react-navigation/elements'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { StyledText } from 'src/components/atoms/text'
import { useFilterContext } from 'src/modules/filter-context'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { isEmptyObject } from 'src/utils/isEmptyObject'

import {
  FilterHeaderTitle,
  FilterHeaderWrapper,
  HeaderContainer,
  StyledFilterHeader,
} from './styled'

export const FilterHeader = ({ route, options }: NativeStackHeaderProps) => {
  const title = getHeaderTitle(options, route.name)
  const { fields, clearFields, apply } = useFilterContext()
  const navigation = useNavigation()

  const onClearHandler = () => {
    clearFields()
  }

  const onApply = () => {
    apply()
    navigation.goBack()
  }

  return (
    <StyledFilterHeader>
      <FilterHeaderWrapper>
        <HeaderContainer value={1}>
          {fields && isEmptyObject(fields) && (
            <StyledText
              size={17}
              color={colors.primary}
              onPress={onClearHandler}>
              Clear
            </StyledText>
          )}
        </HeaderContainer>
        <HeaderContainer value={2}>
          <FilterHeaderTitle>
            <StyledText size={15} weight="black">
              {title}
            </StyledText>
          </FilterHeaderTitle>
        </HeaderContainer>
        <Button title="APPLY" onPress={onApply} />
      </FilterHeaderWrapper>
    </StyledFilterHeader>
  )
}
