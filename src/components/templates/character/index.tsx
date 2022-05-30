import React from 'react'
import { ListRenderItem, SectionList, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { DetailItem } from 'src/components/atoms/detailItem'
import { Episode, useGetCharacterQuery } from 'src/generated/graphql'
import { RootStack } from 'src/navigation/root'
import { Routes } from 'src/navigation/routes'

import { DetailsHeader } from '../../atoms/detailsHeader'
import { Line } from '../../atoms/line'
import { CharacterDetailCard } from '../../molecules/characterDetailCard'

type Props = NativeStackScreenProps<RootStack, Routes.CharacterDetailScreen>

function isEpisode(obj: any): obj is Omit<Episode, 'characters'> {
  return !!obj.__typename
}

export const Character = ({ route }: Props) => {
  const { id } = route.params
  const { loading, error, data } = useGetCharacterQuery({
    variables: { id },
  })

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  const characterData = [
    {
      title: 'Informations',
      data: [
        { name: 'gender', data: data?.character?.origin?.name },
        { name: 'origin', data: data?.character?.origin?.name },
        { name: 'type', data: data?.character?.type },
        { name: 'location', data: data?.character?.location?.name },
      ],
    },
    {
      title: 'Episodes',
      data: data?.character?.episode ? [...data?.character?.episode] : [],
    },
  ]

  const renderDetailsItem: ListRenderItem<
    | Omit<Episode, 'characters'>
    | { name: string; data: string | null | undefined }
  > = ({ item }) => {
    if (isEpisode(item)) {
      return (
        <DetailItem
          title={item.episode || ''}
          description={item.name || ''}
          date={item.air_date || ''}
          navigate={true}
          isEpisode={true}
        />
      )
    }

    return <DetailItem title={item.name || ''} description={item.data || ''} />
  }

  return data?.character ? (
    <View>
      <SectionList
        renderItem={renderDetailsItem}
        ListHeaderComponent={<CharacterDetailCard {...data?.character} />}
        renderSectionFooter={() => <Line />}
        ItemSeparatorComponent={() => <Line ml={16} />}
        sections={characterData}
        renderSectionHeader={({ section: { title } }) => {
          return (
            <View>
              <DetailsHeader>{title}</DetailsHeader>
              <Line />
            </View>
          )
        }}
      />
    </View>
  ) : (
    <View />
  )
}
