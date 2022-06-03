import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'

export const StyledTabHeader = styled.View`
  flex-direction: row;
  height: 96px;
  padding-left: 16px;
  background-color: ${baseTheme.colors.basic.headerBg};
`

export const StyledTabHeaderTitle = styled.View`
  align-self: flex-end;
  padding-bottom: 10px;
`
