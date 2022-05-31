import { Episode, GetEpisodesQuery } from 'src/generated/graphql'

export type EpisodeHome = Pick<Episode, 'air_date' | 'id' | 'episode' | 'name'>

export interface EpisodesSection {
  title: number
  data: EpisodeHome[]
}

export const getEpisodesSections = (
  data: NonNullable<GetEpisodesQuery['episodes']>['results'],
) => {
  const result: EpisodesSection[] = []
  data?.forEach((episode) => {
    if (!episode) {
      return
    }
    const eChIndex = episode?.episode?.toLowerCase().indexOf('e')
    let season: number | string | undefined = episode?.episode?.slice(
      1,
      eChIndex,
    )

    if (!season) {
      return
    }

    season = parseInt(season, 10)
    const seasonIndex = result.findIndex((s) => s.title === season)

    if (seasonIndex !== -1) {
      return result[seasonIndex].data.push(episode)
    }

    return result.push({ title: season, data: [episode] })
  })

  return result
}
