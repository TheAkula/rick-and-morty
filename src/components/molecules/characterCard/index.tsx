import React from 'react'
import { TouchableOpacity } from 'react-native'

import { CharacterCardImg } from 'src/components/atoms/characterCardImg'
import { StyledText } from 'src/components/atoms/text'
import { Scalars } from 'src/generated/graphql'
import { Routes, useNavigation } from 'src/navigation/routes'
import { baseTheme } from 'src/theme/base'

import {
  CharacterCardContainer,
  StyledCharacterCard,
  StyledCharacterCardInfo,
} from './styled'

interface CharacterCardProps {
  image: string
  status: string
  name: string
  id: Scalars['ID']
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  image,
  status,
  name,
  id,
}) => {
  const navigation = useNavigation()

  const onPressed = () => {
    navigation.push(Routes.CharacterDetailScreen, {
      id,
      name,
    })
  }

  return (
    <TouchableOpacity onPress={onPressed}>
      <CharacterCardContainer collapsable={false}>
        <StyledCharacterCard>
          <CharacterCardImg source={{ uri: image }} />
          <StyledCharacterCardInfo>
            <StyledText size={11} color={baseTheme.colors.basic.lightGray}>
              {status}
            </StyledText>
            <StyledText size={17} weight={'black'}>
              {name}
            </StyledText>
          </StyledCharacterCardInfo>
        </StyledCharacterCard>
      </CharacterCardContainer>
    </TouchableOpacity>
  )
}
