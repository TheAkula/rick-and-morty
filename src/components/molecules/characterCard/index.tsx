import React from 'react'
import { TouchableOpacity } from 'react-native'

import { CharacterCardImg } from 'src/components/atoms/characterCardImg'
import { StyledText } from 'src/components/atoms/text'
import { Scalars } from 'src/generated/graphql'
import { Routes, useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

import { StyledCharacterCard, StyledCharacterCardInfo } from './styled'

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
    navigation.navigate(Routes.CharacterDetailScreen, {
      id,
      name,
    })
  }

  return (
    <TouchableOpacity onPress={onPressed}>
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
    </TouchableOpacity>
  )
}
