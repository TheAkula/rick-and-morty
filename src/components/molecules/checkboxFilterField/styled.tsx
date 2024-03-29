import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { baseTheme } from 'src/theme/base'

export const StyledCheckboxContainer = styled.View<{ isLast: boolean }>`
  flex-direction: row;
  height: 44px;
  padding-left: 18px;
  border-color: ${baseTheme.colors.basic.line};
  border-style: solid;
  border-bottom-width: ${ifProp('isLast', '1px', '0')};
  margin-bottom: ${ifProp('isLast', '30px', '0')};
`

export const CheckboxTitle = styled.View<{
  isLast: boolean
}>`
  border-bottom-color: ${baseTheme.colors.basic.line};
  border-bottom-width: ${ifProp('isLast', '0', '1px')};
  border-bottom-style: solid;
  justify-content: center;
  flex: 1;
  margin-left: 16px;
`
