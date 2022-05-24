import React from 'react'

import { colors } from 'src/theme/colors'
import { StyledText } from 'src/components/atoms/text'

import { StyledFilterSectionListHeader } from './styled'

export const FilterSectionListHeader = ({ title }: { title: string }) => {
  return (
    <StyledFilterSectionListHeader>
      <StyledText color={colors.basic.lightTitle} size={15}>
        {title}
      </StyledText>
    </StyledFilterSectionListHeader>
  )
}
