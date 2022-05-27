import React from 'react'

import { FilterFieldType } from 'src/modules/filter-context'
import { colors } from 'src/theme/colors'

import { StyledText } from '../text'
import { CheckboxTitle } from './styled'

interface DetailsItemProps<T extends string> {
  isLast: boolean
  name: T
  description: string
}

export const DetailsItem: React.FC<DetailsItemProps<FilterFieldType>> = ({
  isLast,
  name,
  description,
}) => {
  return (
    <CheckboxTitle isLast={isLast}>
      <StyledText size={17} weight="black">
        {name[0].toUpperCase() + name.slice(1)}
      </StyledText>
      <StyledText size={15} color={colors.basic.lightGray}>
        {description}
      </StyledText>
    </CheckboxTitle>
  )
}
