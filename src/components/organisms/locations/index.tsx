import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import { LocationItem } from 'src/components/molecules/locationItem'
import { PaginatedScreen } from 'src/components/templates/paginatedScreen'
import { Location, useGetLocationsQuery } from 'src/generated/graphql'
import { useFilterContext } from 'src/modules/filter-context'

import { StyledFlatList } from './styled'

type LocationItem = Pick<Location, 'type' | 'name' | 'id' | '__typename'> | null

export const Locations = () => {
  const { appliedFields } = useFilterContext()

  const renderLocations: ListRenderItem<LocationItem> = ({ item }) => {
    return (
      <LocationItem
        name={item?.name || ''}
        type={item?.type || ''}
        id={item?.id || ''}
      />
    )
  }

  return (
    <PaginatedScreen
      variables={{
        options: appliedFields.location,
      }}
      query={useGetLocationsQuery}
      indexKey={'i'}
      getNext={(data) => data.locations.info.next}>
      {(endReached, data) => (
        <StyledFlatList
          data={data.locations?.results}
          renderItem={renderLocations}
          numColumns={2}
          onEndReached={endReached}
          onEndReachedThreshold={0.1}
        />
      )}
    </PaginatedScreen>
  )
}
