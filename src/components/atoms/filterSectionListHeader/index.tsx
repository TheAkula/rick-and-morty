import React from 'react'

import { StyledText } from 'src/components/atoms/text'
import { baseTheme } from 'src/theme/base'

import { StyledFilterSectionListHeader } from './styled'

interface FilterSectionListHeaderProps {
  title: string
}

export const FilterSectionListHeader: React.FC<FilterSectionListHeaderProps> =
  ({ title }) => {
    return (
      <StyledFilterSectionListHeader>
        <StyledText color={baseTheme.colors.basic.lightTitle} size={15}>
          {title[0].toUpperCase() + title.slice(1)}
        </StyledText>
      </StyledFilterSectionListHeader>
    )
  }
