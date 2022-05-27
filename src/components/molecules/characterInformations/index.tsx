import React from 'react'
import { ListRenderItem, View } from 'react-native'

import { DetailsHeader } from 'src/components/atoms/detailsHeader'
import { DetailsItem } from 'src/components/atoms/detailsItem'
import { StyledFlatList } from 'src/components/atoms/flatList'
import { GetCharacterQuery } from 'src/generated/graphql'
import { FilterFieldType } from 'src/modules/filter-context'

export const CharacterInformations: React.FC<GetCharacterQuery['character']> =
  ({ gender, origin, type, location }) => {
    const informationsData = Object.entries({
      gender,
      origin: origin?.name,
      type,
      location: location?.name,
    })

    const renderInformationsItem: ListRenderItem<unknown> = ({
      item,
      index,
    }) => {
      return (
        <DetailsItem
          name={(item as any[])[0] as FilterFieldType}
          description={informationsData[index][1]?.toString() || 'Unknown'}
          isLast={index === informationsData.length}
        />
      )
    }

    return (
      <View>
        <DetailsHeader>Informations</DetailsHeader>
        <StyledFlatList
          data={informationsData}
          renderItem={renderInformationsItem}
        />
      </View>
    )
  }
