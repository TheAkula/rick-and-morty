import React, { ComponentType } from 'react'
import { FlatListProps, ListRenderItem, View } from 'react-native'

import { CharacterCard } from 'src/components/molecules/characterCard'
import { Character, GetCharactersQuery } from 'src/generated/graphql'

import { StyledCharactersList } from './styled'

interface CharactersProps {
  characters: NonNullable<GetCharactersQuery['characters']>['results']
  topElement?: React.ComponentType<any> | React.ReactElement<any, any>
}

export const Characters: React.FC<CharactersProps> = ({
  characters,
  topElement,
}) => {
  const renderItem: ListRenderItem<Pick<
    Character,
    '__typename' | 'id' | 'name' | 'status' | 'image'
  > | null> = ({ item }) => {
    if (!item) {
      return <View />
    }

    return (
      <CharacterCard
        image={item.image || ''}
        name={item.name || ''}
        status={item.status || ''}
        id={item.id || ''}
        key={item.id}
      />
    )
  }

  return characters ? (
    <View>
      <StyledCharactersList<
        ComponentType<
          { data: CharactersProps['characters'] } & FlatListProps<Pick<
            Character,
            '__typename' | 'id' | 'name' | 'status' | 'image'
          > | null>
        >
      >
        data={characters}
        ListHeaderComponent={topElement}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => (item as { id: string }).id}
      />
    </View>
  ) : (
    <View />
  )
}
