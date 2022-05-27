import { View } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export const StyledFilterSectionListHeader = styled(View)`
  padding-left: 16px;
  padding-bottom: 9px;
  border-color: ${colors.basic.line};
  border-style: solid;
  border-bottom-width: 1px;
`
