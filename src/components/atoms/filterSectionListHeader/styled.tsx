import { View } from 'react-native'
import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'

export const StyledFilterSectionListHeader = styled(View)`
  padding-left: 16px;
  padding-bottom: 9px;
  border-color: ${baseTheme.colors.basic.line};
  border-style: solid;
  border-bottom-width: 1px;
`
