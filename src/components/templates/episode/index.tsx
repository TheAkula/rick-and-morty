import React from 'react'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { DetailsHeader } from 'src/components/atoms/detailsHeader'
import { DetailHead } from 'src/components/molecules/detailHead'
import { Characters } from 'src/components/organisms/characters'
import { useGetEpisodeQuery } from 'src/generated/graphql'
import { RootStack } from 'src/navigation/routes'
import { Routes } from 'src/navigation/routes'
import { Spinner } from 'src/ui/spinner'

type Props = NativeStackScreenProps<RootStack, Routes.EpisodeDetailScreen>

export const EpisodeDetail = ({ route }: Props) => {
  const { id } = route.params

  const { loading, error, data } = useGetEpisodeQuery({
    variables: {
      id,
    },
  })

  if (error) {
    return <Text>{error.message}</Text>
  }

  if (loading || !data?.episode) {
    return <Spinner />
  }

  const { name, episode, air_date } = data?.episode

  return (
    <View>
      <Characters
        characters={data?.episode?.characters}
        topElement={() => (
          <View>
            <DetailHead
              name={name || ''}
              desc={episode || ''}
              type={air_date || ''}
            />
            <DetailsHeader>Characters</DetailsHeader>
          </View>
        )}
      />
    </View>
  )
}
