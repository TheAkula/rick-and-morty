import React from 'react'

import { CharacterCardImg } from 'src/components/atoms/characterCardImg'
import { colors } from 'src/theme/colors'
import { StyledText } from 'src/theme/styles'

import { StyledCharacterCard, StyledCharacterCardInfo } from './styled'

interface CharacterCardProps {
  image: string
  status: string
  name: string
  id: number
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  image,
  status,
  name,
  id,
}) => {
  return (
    <StyledCharacterCard>
      <CharacterCardImg source={{ uri: image }} />
      <StyledCharacterCardInfo>
        <StyledText size={11} color={colors.basic.lightGray}>
          {status}
        </StyledText>
        <StyledText size={17} weight={'black'}>
          {name}
        </StyledText>
      </StyledCharacterCardInfo>
    </StyledCharacterCard>
  )
}
