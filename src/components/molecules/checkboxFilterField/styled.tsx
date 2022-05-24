import { View } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export const StyledCheckboxContainer = styled(View)`
  flex-direction: row;
  height: 44px;
  padding-left: 18px;
`

export const CheckboxTitle = styled(View).attrs({ jusifyContent: 'center' })`
  /* border-bottom: 1px solid ${colors.graybase.gray2}; */
  border-bottom-color: ${colors.graybase.gray2};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  justify-content: center;
  flex: 1;
`
