import React from 'react'

import { StyledText } from 'src/components/atoms/text'
import { baseTheme } from 'src/theme/base'

import { StyledDetailHead } from './styled'

interface LocationHeadProps {
  type: string
  name: string
  desc: string
}

export const DetailHead: React.FC<LocationHeadProps> = ({
  type,
  name,
  desc,
}) => {
  return (
    <StyledDetailHead>
      <StyledText size={11} color={baseTheme.colors.basic.lightGray}>
        {type}
      </StyledText>
      <StyledText size={28} weight="bold" align="center">
        {name}
      </StyledText>
      <StyledText
        size={13}
        color={baseTheme.colors.graybase.gray1}
        weight="black">
        {desc}
      </StyledText>
    </StyledDetailHead>
  )
}
