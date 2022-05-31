import React, { useMemo } from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'

import { FilterSectionListHeader } from 'src/components/atoms/filterSectionListHeader'
import { CheckboxFilterField } from 'src/components/molecules/checkboxFilterField'
import { SelectFilterField } from 'src/components/molecules/selectFilterField'
import { useFilterContext } from 'src/modules/filter-context'
import {
  FilterFieldCheck,
  FilterFieldSelect,
  getFilterFields,
} from 'src/utils/getFilterFields'

export const FilterFields = () => {
  const { type } = useFilterContext()

  const renderField: ListRenderItem<FilterFieldSelect | FilterFieldCheck> = ({
    item,
  }) => {
    if (item.type === 'check') {
      return (
        <View>
          <FilterSectionListHeader title={item.title} />
          {item.data.map((field, index) => {
            return (
              <CheckboxFilterField
                key={item.title + field}
                isLast={index + 1 === item.data.length}
                title={item.title}
                name={field}
              />
            )
          })}
        </View>
      )
    }

    return (
      <SelectFilterField name={item.title} description={item.description} />
    )
  }

  const fields = useMemo(() => getFilterFields(type), [type])

  return fields ? <FlatList data={fields} renderItem={renderField} /> : null
}
