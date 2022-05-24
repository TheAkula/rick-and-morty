import React from 'react'
import { getHeaderTitle } from '@react-navigation/elements'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { StyledText } from 'src/components/atoms/text'
import { Button } from 'src/ui/button'

import {
  FilterHeaderTitle,
  FilterHeaderWrapper,
  StyledFilterHeader,
} from './styled'

export const filterHeader = ({ route, options }: NativeStackHeaderProps) => {
  const title = getHeaderTitle(options, route.name)

  return (
    <StyledFilterHeader>
      <FilterHeaderWrapper>
        <FilterHeaderTitle>
          <StyledText size={15} weight="black">
            {title}
          </StyledText>
        </FilterHeaderTitle>
        <Button title="APPLY" />
      </FilterHeaderWrapper>
    </StyledFilterHeader>
  )
}
