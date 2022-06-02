import React from 'react'
import { ListRenderItem, useWindowDimensions } from 'react-native'

import { LocationItem } from 'src/components/molecules/locationItem'
import { PaginatedScreen } from 'src/components/templates/paginatedScreen'
import { Location, useGetLocationsQuery } from 'src/generated/graphql'
import { useFilterContext } from 'src/modules/filter-context'

import { baseTheme } from '../../theme/base'
import { StyledFlatList } from './styled'

type LocationItemType = Pick<
  Location,
  'type' | 'name' | 'id' | '__typename'
> | null

export const LocationsScreen = () => {
  const { appliedFields } = useFilterContext()
  const dimensions = useWindowDimensions()

  const numColumns = Math.floor(
    dimensions.width / (baseTheme.sizes.characterCard.width + 20),
  )

  const renderLocations: ListRenderItem<LocationItemType> = ({ item }) => {
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
          numColumns={numColumns}
          key={numColumns}
          onEndReached={endReached}
          onEndReachedThreshold={0.1}
        />
      )}
    </PaginatedScreen>
  )
}
