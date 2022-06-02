import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'

export const StyledSelectFilterField = styled.View`
  height: 60px;
  flex-direction: row;
  padding-left: 19px;
  padding-right: 16px;
  align-items: center;
  margin-bottom: 20px;
  border-color: ${baseTheme.colors.basic.line};
  border-style: solid;
  border-top-width: 1px;
  border-bottom-width: 1px;
  justify-content: space-between;
`

export const StyledFieldInfoItem = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ArrowContainer = styled.View`
  justify-self: flex-end;
`
