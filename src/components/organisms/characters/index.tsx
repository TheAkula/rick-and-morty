import React from 'react'
import { ListRenderItem } from 'react-native'

import { CharacterCard } from 'src/components/molecules/characterCard'

import { StyledCharactersList } from './styled'

export interface Character {
  id: number
  name: string
  status: string
  image: string
}

interface CharactersProps {
  characters: Character[]
}

export const Characters: React.FC<CharactersProps> = ({ characters }) => {
  const renderItem: ListRenderItem<any> = ({ item }) => (
    <CharacterCard {...item} />
  )

  return <StyledCharactersList data={characters} renderItem={renderItem} />
}
