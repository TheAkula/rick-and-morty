import React from 'react'
import { Text } from 'react-native-svg'

import { useGetCharactersQuery } from 'src/generated/graphql'
import { useFilterContext } from 'src/modules/filter-context'
import { ScreenTypes } from 'src/modules/filter-context'

import { Characters } from '../organisms/characters'

export const CharactersTemplate = () => {
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

  return <Characters characters={data?.characters?.results} />
}
