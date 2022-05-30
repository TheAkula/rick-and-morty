import React from 'react'

import { StyledText } from 'src/components/atoms/text'
import { colors } from 'src/theme/colors'

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
      <StyledText size={11} color={colors.basic.lightGray}>
        {type}
      </StyledText>
      <StyledText size={28} weight="bold">
        {name}
      </StyledText>
      <StyledText size={13} color={colors.graybase.gray1} weight="black">
        {desc}
      </StyledText>
    </StyledDetailHead>
  )
}
