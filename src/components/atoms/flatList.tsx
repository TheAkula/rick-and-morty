import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { Line } from './line'

export const StyledFlatList = styled.FlatList.attrs({
  ItemSeparatorComponent: Line,
})`
  border-color: ${colors.basic.line};
  border-style: solid;
  border-top-width: 1px;
  border-bottom-width: 1px;
`
