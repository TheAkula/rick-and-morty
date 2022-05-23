import { View } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export const StyledTabHeader = styled(View)`
  flex-direction: row;
  height: 96px;
  padding-left: 16px;
  background-color: ${colors.basic.headerBg};
`

export const StyledTabHeaderTitle = styled(View)`
  align-self: flex-end;
  padding-bottom: 10px;
`
