import React from 'react'
import { View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { getValue, useFilterContext } from 'src/modules/filter-context'
import { FilterParamList, FilterRoutes } from 'src/types/filterNavigation'
import { Input } from 'src/ui/input'

type Props = NativeStackScreenProps<FilterParamList, FilterRoutes.Select>

export const FilterSelect = ({ route }: Props) => {
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
