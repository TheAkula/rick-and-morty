import React from 'react'
import { ListRenderItem, Text } from 'react-native'

import { CharacterCard } from 'src/components/molecules/characterCard'
import { useGetCharactersQuery } from 'src/generated/graphql'
import { useFilterContext } from 'src/modules/filter-context'
import { ScreenTypes } from 'src/modules/filter-context'

import { CharactersContainer, StyledCharactersList } from './styled'

export const Characters = () => {
  const { appliedFields } = useFilterContext()

  const { loading, error, data } = useGetCharactersQuery({
    variables: {
      options: appliedFields[ScreenTypes.character],
    },
  })

  if (error) {
    return <Text>{error.message}</Text>
  }

  if (loading) {
    return <Text>Loading...</Text>
  }

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <CharacterCard {...item} key={item.id} />
  )

  return (
    <CharactersContainer>
      <StyledCharactersList
        data={data?.characters?.results}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => (item as { id: string }).id}
      />
    </CharactersContainer>
  )
}
