import React from 'react'
import { Text } from 'react-native'
import { Route } from '@react-navigation/native'

import { CharacterDetailCard } from 'src/components/molecules/characterDetailCard'
import { Scalars, useGetCharacterQuery } from 'src/generated/graphql'

export const Character = ({
  route,
}: {
  route: Route<'Character', { id: Scalars['ID'] }>
}) => {
  const { id } = route.params
  const { loading, error, data } = useGetCharacterQuery({ variables: { id } })

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  return data?.character && <CharacterDetailCard {...data?.character} />
}
