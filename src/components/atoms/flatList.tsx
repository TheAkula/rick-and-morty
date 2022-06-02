import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'

import { Line } from './line'

export const StyledFlatList = styled.FlatList.attrs({
  ItemSeparatorComponent: Line,
})`
  border-color: ${baseTheme.colors.basic.line};
  border-style: solid;
  border-top-width: 1px;
  border-bottom-width: 1px;
`
