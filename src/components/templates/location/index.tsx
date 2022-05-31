import React from 'react'
import { Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { DetailsHeader } from 'src/components/atoms/detailsHeader'
import { DetailHead } from 'src/components/molecules/detailHead'
import { Characters } from 'src/components/organisms/characters'
import { useGetLocationQuery } from 'src/generated/graphql'
import { RootStack } from 'src/navigation/routes'
import { Routes } from 'src/navigation/routes'

import { StyledLocation } from './styled'

type Props = NativeStackScreenProps<RootStack, Routes.LocationDetailScreen>

export const Location = ({ route }: Props) => {
  const { id } = route.params
  const { loading, error, data } = useGetLocationQuery({ variables: { id } })

  if (error) {
    return <Text>{error.message}</Text>
  }

  if (loading || !data?.location) {
    return <Text>Loading...</Text>
  }

  const { name, dimension, type, residents } = data?.location

  return (
    <StyledLocation>
      <Characters
        characters={residents}
        topElement={() => (
          <>
            <DetailHead
              name={name || ''}
              type={type || ''}
              desc={dimension || ''}
            />
            <DetailsHeader>Residents</DetailsHeader>
          </>
        )}
      />
    </StyledLocation>
  )
}
