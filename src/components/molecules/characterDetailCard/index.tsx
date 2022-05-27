import React from 'react'

import { StyledText } from 'src/components/atoms/text'
import { GetCharacterQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

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
      <StyledCharacterDetailCard
        source={require('../../../../assets/images/character-bg.png')}>
        <ImageContainer>
          {image && (
            <StyledImage source={{ uri: image }} width={130} height={130} />
          )}
        </ImageContainer>
        <StyledText size={11} color={colors.basic.lightGray}>
          {status}
        </StyledText>
        <StyledText size={28} weight="bold">
          {name}
        </StyledText>
        <StyledText size={13} color={colors.graybase.gray1} weight="black">
          {species}
        </StyledText>
      </StyledCharacterDetailCard>
    </StyledCardContainer>
  )
}
