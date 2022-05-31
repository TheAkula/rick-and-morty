import React from 'react'
import { ListRenderItem, View } from 'react-native'
import { Text } from 'react-native-svg'

import { LocationItem } from 'src/components/molecules/locationItem'
import { Location, useGetLocationsQuery } from 'src/generated/graphql'
import { useFilterContext } from 'src/modules/filter-context'
import { Spinner } from 'src/ui/spinner'

import { StyledFlatList } from './styled'

export const Locations = () => {
  const { appliedFields } = useFilterContext()

  const { loading, error, data } = useGetLocationsQuery({
    variables: {
      options: appliedFields.location,
    },
  })

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  const renderLocations: ListRenderItem<Pick<
    Location,
    'type' | 'name' | 'id' | '__typename'
  > | null> = ({ item }) => {
    return (
      <LocationItem
        name={item?.name || ''}
        type={item?.type || ''}
        id={item?.id || ''}
      />
    )
  }

  return data ? (
    <StyledFlatList<React.ElementType>
      data={data.locations?.results}
      renderItem={renderLocations}
      numColumns={2}
    />
  ) : (
    <View />
  )
}
