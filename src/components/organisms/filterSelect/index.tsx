import React from 'react'
import { Text, View } from 'react-native'
import { Route } from '@react-navigation/native'

export const FilterSelect = ({
  route,
}: {
  route: Route<'Select', { title: string }>
}) => {
  const { title } = route.params

  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  )
}
