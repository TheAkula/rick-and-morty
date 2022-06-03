import React from 'react'
import { ListRenderItem, useWindowDimensions, View } from 'react-native'

import { CharacterCard } from 'src/components/molecules/characterCard'
import { Character, GetCharactersQuery } from 'src/generated/graphql'
import { baseTheme } from 'src/theme/base'

import { StyledCharactersList } from './styled'

interface CharactersProps {
  characters: NonNullable<GetCharactersQuery['characters']>['results']
  endReached?: () => void
  topElement?: React.ComponentType<any> | React.ReactElement<any, any>
}

export const Characters: React.FC<CharactersProps> = ({
  characters,
  topElement,
  endReached,
}) => {
  const dimensions = useWindowDimensions()

  const numColumns = Math.floor(
    dimensions.width / (baseTheme.sizes.characterCard.width + 20),
  )

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
      />
    )
  }

  return characters ? (
    <View>
      <StyledCharactersList
        data={characters}
        key={numColumns}
        ListHeaderComponent={topElement}
        onEndReached={endReached}
        onEndReachedThreshold={0.1}
        renderItem={renderItem}
        removeClippedSubviews
        numColumns={numColumns}
        keyExtractor={(item) => (item as { id: string }).id}
      />
    </View>
  ) : (
    <View />
  )
}
