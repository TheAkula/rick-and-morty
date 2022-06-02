import React from 'react'
import CharacterBg from 'assets/images/character-bg.png'

import { StyledText } from 'src/components/atoms/text'
import { GetCharacterQuery } from 'src/generated/graphql'
import { baseTheme } from 'src/theme/base'

import {
  ImageContainer,
  StyledCardContainer,
  StyledCharacterDetailCard,
  StyledImage,
} from './styled'

export const CharacterDetailCard: React.FC<GetCharacterQuery['character']> = ({
  image,
  status,
  name,
  species,
}) => {
  return (
    <StyledCardContainer>
      <StyledCharacterDetailCard source={CharacterBg}>
        <ImageContainer>
          {image && (
            <StyledImage source={{ uri: image }} width={130} height={130} />
          )}
        </ImageContainer>
        <StyledText size={11} color={baseTheme.colors.basic.lightGray}>
          {status}
        </StyledText>
        <StyledText size={28} weight="bold">
          {name}
        </StyledText>
        <StyledText
          size={13}
          color={baseTheme.colors.graybase.gray1}
          weight="black">
          {species}
        </StyledText>
      </StyledCharacterDetailCard>
    </StyledCardContainer>
  )
}
