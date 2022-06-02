import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'

import { StyledText } from './text'

export const DetailsHeader = styled(StyledText).attrs({
  size: 20,
  color: baseTheme.colors.graybase.gray1,
  weight: 'bold',
})`
  margin-top: 20px;
  margin-bottom: 10px;
  padding-left: 16px;
`
