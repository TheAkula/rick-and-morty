import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export const StyledLocationItem = styled.View.attrs({
  borderRadius: 8,
})`
  width: 163px;
  min-height: 80px;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid ${colors.basic.line};
  margin-right: 8.5px;
  margin-left: 8.5px;
`
