import React from 'react'
import { ListRenderItem, View } from 'react-native'

import { CharacterCard } from 'src/components/molecules/characterCard'
import { GetCharactersQuery } from 'src/generated/graphql'

import { StyledCharactersList } from './styled'

interface CharactersProps {
  characters: NonNullable<GetCharactersQuery['characters']>['results']
  topElement?: React.ComponentType<any> | React.ReactElement<any, any>
}

export const Characters: React.FC<CharactersProps> = ({
  characters,
  topElement,
}) => {
  const renderItem: ListRenderItem<any> = ({ item }) => (
    <CharacterCard {...item} key={item.id} />
  )

  return (
    <View>
      <StyledCharactersList
        data={characters}
        ListHeaderComponent={topElement}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => (item as { id: string }).id}
      />
    </View>
  )
}
