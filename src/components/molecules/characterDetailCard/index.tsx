import React from 'react'
import { Image, ImageBackground } from 'react-native'

import { StyledText } from 'src/components/atoms/text'
import { Character, GetCharacterQuery } from 'src/generated/graphql'
import { colors } from 'src/theme/colors'

import {
  ImageContainer,
  StyledCardContainer,
  StyledCharacterDetailCard,
} from './styled'

export const CharacterDetailCard: React.FC<GetCharacterQuery['character']> = ({
  image,
  status,
  name,
  species,
}) => {
  return (
    <StyledCardContainer>
      <ImageBackground
        source={require('../../../../assets/images/character-bg.png')}
      />
      <StyledCharacterDetailCard>
        <ImageContainer>
          {image && <Image source={{ uri: image }} />}
        </ImageContainer>
        <StyledText size={11} color={colors.basic.lightGray}>
          {status}
        </StyledText>
        <StyledText size={28} weight="bold">
          {name}
        </StyledText>
        <StyledText size={13} color={colors.graybase.gray1}>
          {species}
        </StyledText>
      </StyledCharacterDetailCard>
    </StyledCardContainer>
  )
}
