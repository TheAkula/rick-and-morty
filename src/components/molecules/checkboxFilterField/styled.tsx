import { View } from 'react-native'
import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { colors } from 'src/theme/colors'

export const StyledCheckboxContainer = styled(View)`
  flex-direction: row;
  height: 44px;
  padding-left: 18px;
`

export const CheckboxTitle = styled(View)<{
  isLast: boolean
}>`
  border-bottom-color: ${colors.basic.line};
  border-bottom-width: ${ifProp('isLast', '0', '1px')};
  border-bottom-style: solid;
  justify-content: center;
  flex: 1;
  margin-left: 16px;
`
