import React, { useMemo } from 'react'
import { FlatList, ListRenderItem, SectionListRenderItem } from 'react-native'

import { FilterSectionListHeader } from 'src/components/atoms/filterSectionListHeader'
import { CheckboxFilterField } from 'src/components/molecules/checkboxFilterField'
import { FilterSectionList } from 'src/components/molecules/filterSectionList'
import { SelectFilterField } from 'src/components/molecules/selectFilterField'
import { FilterFieldType, useFilterContext } from 'src/modules/filter-context'
import {
  FilterFieldCheck,
  FilterFieldSelect,
  getFilterFields,
} from 'src/utils/getFilterFields'

export const FilterFields = () => {
  const { type } = useFilterContext()

  const renderSectionHeader: SectionListRenderItem<
    FilterFieldType,
    FilterFieldCheck
  > = ({ section: { title } }) => {
    return <FilterSectionListHeader title={title} />
  }

  const renderField: ListRenderItem<FilterFieldSelect | FilterFieldCheck> = ({
    item,
  }) => {
    if (item.type === 'check') {
      return (
        <FilterSectionList
          sections={[item]}
          renderSectionHeader={renderSectionHeader}
          renderItem={(props) => (
            <CheckboxFilterField
              isLast={props.index + 1 === item.data.length}
              title={item.title}
              name={props.item as string}
            />
          )}
        />
      )
    }

    return (
      <SelectFilterField name={item.title} description={item.description} />
    )
  }

  const fields = useMemo(() => getFilterFields(type), [type])

  return fields ? <FlatList data={fields} renderItem={renderField} /> : null
}
