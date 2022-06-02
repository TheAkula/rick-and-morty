import React from 'react'
import styled from 'styled-components/native'

import { Characters } from 'src/components/organisms/characters'
import { PaginatedScreen } from 'src/components/templates/paginatedScreen'
import { useGetCharactersQuery } from 'src/generated/graphql'
import { ScreenTypes, useFilterContext } from 'src/modules/filter-context'

const CharactersContainer = styled.View`
  padding-top: 20px;
`

export const CharactersScreen = () => {
  const { appliedFields } = useFilterContext()

  return (
    <PaginatedScreen
      variables={{
        options: appliedFields[ScreenTypes.character],
      }}
      indexKey={'i'}
      query={useGetCharactersQuery}
      getNext={(data) => data.characters.info.next}>
      {(endReached, data) => (
        <CharactersContainer>
          <Characters
            endReached={endReached}
            characters={data?.characters?.results}
          />
        </CharactersContainer>
      )}
    </PaginatedScreen>
  )
}
