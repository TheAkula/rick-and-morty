import { View } from 'react-native'
import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { colors } from 'src/theme/colors'

export const CheckboxTitle = styled(View).attrs({ jusifyContent: 'center' })<{
  isLast: boolean
}>`
  border-bottom-color: ${colors.basic.line};
  border-bottom-width: ${ifProp('isLast', '0', '1px')};
  border-bottom-style: solid;
  justify-content: center;
  flex: 1;
  padding-left: 16px;
  height: 60px;
`
