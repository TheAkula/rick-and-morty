import React from 'react'
import styled from 'styled-components/native'

import { useGetCharactersQuery } from 'src/generated/graphql'
import { ScreenTypes, useFilterContext } from 'src/modules/filter-context'

import { Characters } from '../../organisms/characters'
import { PaginatedScreen } from '../paginatedScreen'

const CharactersContainer = styled.View`
  padding-top: 20px;
`

export const CharactersTemplate = () => {
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
