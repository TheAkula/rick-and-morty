import React from 'react'
import { View } from 'react-native'
import { Route } from '@react-navigation/native'

import {
  FilterFieldType,
  getValue,
  useFilterContext,
} from 'src/modules/filter-context'
import { Input } from 'src/ui/input'

export const FilterSelect = ({
  route,
}: {
  route: Route<'Select', { title: FilterFieldType }>
}) => {
  const { title } = route.params
  const { fields, updateField, type } = useFilterContext()

  const onChangedHandler = (text: string) => {
    updateField(title, text)
  }

  return (
    <View>
      <View>
        {type && (
          <Input
            onChangeText={onChangedHandler}
            value={getValue(fields, type, title)}
          />
        )}
      </View>
    </View>
  )
}
