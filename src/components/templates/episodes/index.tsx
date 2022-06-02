import React from 'react'
import {
  SectionList,
  SectionListData,
  SectionListRenderItem,
  View,
} from 'react-native'

import { DetailItem } from 'src/components/atoms/detailItem'
import { DetailsHeader } from 'src/components/atoms/detailsHeader'
import { Line } from 'src/components/atoms/line'
import { SectionsSeparator } from 'src/components/atoms/sectionsSeparator'
import { useGetEpisodesQuery } from 'src/generated/graphql'
import { useFilterContext } from 'src/modules/filter-context'
import { getEpisodesSections } from 'src/utils/getEpisodesSections'
import { EpisodeHome } from 'src/utils/getEpisodesSections'

import { PaginatedScreen } from '../paginatedScreen'

type RenderSectionHeaderProps = {
  section: SectionListData<
    EpisodeHome,
    {
      title: number
      data: EpisodeHome[]
    }
  >
}

export const Episodes = () => {
  const { appliedFields } = useFilterContext()

  const renderEpisodeItem: SectionListRenderItem<
    EpisodeHome,
    { title: number; data: EpisodeHome[] }
  > = ({ item }) => {
    return (
      <DetailItem
        isEpisode={true}
        title={item.episode || ''}
        description={item.name || ''}
        date={item.air_date || ''}
        navigate={item.id || ''}
      />
    )
  }

  const renderEpisodeHeader = ({ section }: RenderSectionHeaderProps) => {
    return (
      <View>
        <DetailsHeader>Season {section.title}</DetailsHeader>
        <Line />
      </View>
    )
  }

  return (
    <PaginatedScreen
      variables={{
        options: appliedFields.episode,
      }}
      indexKey={'i'}
      query={useGetEpisodesQuery}
      getNext={(data) => data.episodes.info.next}>
      {(endReached, data) => {
        const sections = getEpisodesSections(data?.episodes?.results)

        return (
          <SectionList
            renderItem={renderEpisodeItem}
            sections={sections}
            onEndReached={endReached}
            onEndReachedThreshold={0.1}
            renderSectionHeader={renderEpisodeHeader}
            ItemSeparatorComponent={() => <Line ml={16} />}
            renderSectionFooter={() => (
              <SectionsSeparator>
                <Line />
              </SectionsSeparator>
            )}
          />
        )
      }}
    </PaginatedScreen>
  )
}
