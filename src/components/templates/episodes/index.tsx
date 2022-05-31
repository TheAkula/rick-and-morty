import React from 'react'
import {
  SectionList,
  SectionListData,
  SectionListRenderItem,
  Text,
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

  const { loading, error, data } = useGetEpisodesQuery({
    variables: {
      options: appliedFields.episode,
    },
  })

  if (error) {
    return <Text>{error.message}</Text>
  }

  if (loading) {
    return <Text>Loading...</Text>
  }

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

  const sections = getEpisodesSections(data?.episodes?.results)

  return (
    <SectionList
      renderItem={renderEpisodeItem}
      sections={sections}
      renderSectionHeader={renderEpisodeHeader}
      ItemSeparatorComponent={() => <Line ml={16} />}
      renderSectionFooter={() => (
        <SectionsSeparator>
          <Line />
        </SectionsSeparator>
      )}
    />
  )
}
