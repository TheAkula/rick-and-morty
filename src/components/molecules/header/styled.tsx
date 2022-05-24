import { View } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export const StyledTabHeader = styled(View)`
  height: 96px;
  padding-left: 16px;
  padding-top: 45px;
  background-color: ${colors.basic.headerBg};
`
