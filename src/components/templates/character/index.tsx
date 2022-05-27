import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { CharacterDetailCard } from 'src/components/molecules/characterDetailCard'
import { CharacterInformations } from 'src/components/molecules/characterInformations'
import { useGetCharacterQuery } from 'src/generated/graphql'
import { RootStack } from 'src/navigation/root'
import { Routes } from 'src/navigation/routes'

type Props = NativeStackScreenProps<RootStack, Routes.CharacterDetailScreen>

export const Character = ({ route, navigation }: Props) => {
  const { id } = route.params
  const { loading, error, data } = useGetCharacterQuery({ variables: { id } })

  useLayoutEffect(() => {
    if (data?.character?.name) {
      navigation.setOptions({
        title: data?.character?.name,
      })
    }
  }, [navigation, data])

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  return data?.character ? (
    <View>
      <CharacterDetailCard {...data?.character} />
      <CharacterInformations {...data?.character} />
    </View>
  ) : (
    <View />
  )
}
