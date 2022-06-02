import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { baseTheme } from 'src/theme/base'

import { StyledText } from '../text'

export const StyledDetailItem = styled.View<{ isEpisode: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${ifProp('isEpisode', '77px', '60px')};
  padding-right: 16px;
  margin-left: 16px;
`

export const EpisodeDate = styled(StyledText).attrs({
  size: 11,
  color: baseTheme.colors.graybase.gray1,
  weight: 'black',
})`
  margin-top: 5px;
`

export const EpisodeWrapper = styled.View`
  justify-content: center;
`
