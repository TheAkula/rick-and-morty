import React from 'react'
import { View } from 'react-native'
import { Route } from '@react-navigation/native'

import { Fields, useFilterContext } from 'src/modules/filter-context'
import { Input } from 'src/ui/input'

export const FilterSelect = ({
  route,
}: {
  route: Route<'Select', { title: string }>
}) => {
  const { title } = route.params
  const { fields, updateField } = useFilterContext()

  const onChangedHandler = (text: string) => {
    updateField(title, text)
  }

  return (
    <View>
      <View>
        <Input
          onChangeText={onChangedHandler}
          value={fields[title as keyof Fields] || ''}
        />
      </View>
    </View>
  )
}
