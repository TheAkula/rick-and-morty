import React from 'react'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { DetailHead } from 'src/components/molecules/DetailHead'
import { useGetLocationQuery } from 'src/generated/graphql'
import { RootStack } from 'src/navigation/root'
import { Routes } from 'src/navigation/routes'

type Props = NativeStackScreenProps<RootStack, Routes.LocationDetailScreen>

export const Location = ({ navigation, route }: Props) => {
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
    <View>
      <DetailHead name={name || ''} type={type || ''} desc={dimension || ''} />
    </View>
  )
}
