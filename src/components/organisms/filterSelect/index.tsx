import React from 'react'
import { View } from 'react-native'
import { Route } from '@react-navigation/native'

import { Input } from 'src/ui/input'

export const FilterSelect = ({
  route,
}: {
  route: Route<'Select', { title: string }>
}) => {
  const { title } = route.params

  return (
    <View>
      <View>
        <Input />
      </View>
    </View>
  )
}
