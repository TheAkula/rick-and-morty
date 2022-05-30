import React from 'react'
import { ListRenderItem } from 'react-native'

import { CharacterCard } from 'src/components/molecules/characterCard'
import { colors } from 'src/theme/colors'

import { CharactersContainer, StyledCharactersList } from './styled'

interface CharactersProps {
  characters: any
}

export const Characters: React.FC<CharactersProps> = ({ characters }) => {
  const renderItem: ListRenderItem<any> = ({ item }) => (
    <CharacterCard {...item} key={item.id} />
  )

  return (
    <CharactersContainer>
      <StyledCharactersList
        data={characters as any}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => (item as { id: string }).id}
      />
    </CharactersContainer>
  )
}
