import React from 'react'

import { StyledText } from 'src/components/atoms/text'
import { colors } from 'src/theme/colors'

import { StyledFilterSectionListHeader } from './styled'

export const FilterSectionListHeader = ({ title }: { title: string }) => {
  return (
    <StyledFilterSectionListHeader>
      <StyledText color={colors.basic.lightTitle} size={15}>
        {title[0].toUpperCase() + title.slice(1)}
      </StyledText>
    </StyledFilterSectionListHeader>
  )
}
