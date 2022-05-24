import { View } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export const StyledFilterSectionListHeader = styled(View)`
  height: 27px;
  padding-left: 16px;
  padding-bottom: 9px;
  border-bottom-width: 1px;
  border-color: ${colors.graybase.gray2};
  border-style: solid;
`
