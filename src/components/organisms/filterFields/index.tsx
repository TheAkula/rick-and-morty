import { Route } from '@react-navigation/native'
import React, { useMemo } from 'react'
import {
  FlatList,
  ListRenderItem,
  SectionList,
  SectionListRenderItem,
  Text,
} from 'react-native'

import { FilterSectionListHeader } from 'src/components/atoms/filterSectionListHeader'
import { useFilterContext } from 'src/modules/filter-context'
import { getFilterFields } from 'src/utils/getFilterFields'

type Item = string

export const FilterFields = ({
  route,
}: {
  route: Route<'Filter', { type: string }>
}) => {
  // eslint-disable-next-line no-console
  console.log(route)
  const { type } = route.params

  // const { type } = useFilterContext()

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
        <SectionList
          sections={[item]}
          renderSectionHeader={renderSectionHeader}
          renderItem={(props) => <Text>{props.item}</Text>}
        />
      )
    }

    return <Text>{item}</Text>
  }

  const fields = useMemo(() => getFilterFields(type), [type])

  return fields ? <FlatList data={fields} renderItem={renderField} /> : null
}
