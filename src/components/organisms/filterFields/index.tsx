import React, { useMemo } from 'react'
import {
  FlatList,
  ListRenderItem,
  SectionListRenderItem,
  Text,
} from 'react-native'
import { Route } from '@react-navigation/native'

import { FilterSectionListHeader } from 'src/components/atoms/filterSectionListHeader'
import { CheckboxFilterField } from 'src/components/molecules/checkboxFilterField'
import { FilterSectionList } from 'src/components/molecules/filterSectionList'
import { getFilterFields } from 'src/utils/getFilterFields'

type Item = string

export const FilterFields = ({
  route,
}: {
  route: Route<'Filter', { type: string }>
}) => {
  const { type } = route.params

  const renderSectionHeader: SectionListRenderItem<
    Item,
    {
      title: string
      data: Item[]
    }
  > = ({ section: { title } }) => {
    return <FilterSectionListHeader title={title} />
  }

  const renderField: ListRenderItem<
    { title: string; data: string[] } | string
  > = ({ item }) => {
    if (typeof item === 'object') {
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

    return <Text>{item}</Text>
  }

  const fields = useMemo(() => getFilterFields(type), [type])

  return fields ? <FlatList data={fields} renderItem={renderField} /> : null
}
