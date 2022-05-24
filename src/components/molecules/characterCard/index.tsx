import React from 'react'

import { CharacterCardImg } from 'src/components/atoms/characterCardImg'
import { StyledText } from 'src/components/atoms/text'
import { colors } from 'src/theme/colors'

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
