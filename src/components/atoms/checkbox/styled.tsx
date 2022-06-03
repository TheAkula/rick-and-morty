import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { baseTheme } from 'src/theme/base'

export const StyledCheckbox = styled.View<{
  active: boolean
}>`
  width: 22px;
  height: 22px;
  border: ${ifProp('active', '1px', '1.5px')} solid
    ${ifProp(
      'active',
      baseTheme.colors.primary,
      baseTheme.colors.graybase.gray2,
    )};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
`

export const StyledCheckboxInner = styled.View<{ active: boolean }>`
  background-color: ${ifProp(
    'active',
    baseTheme.colors.primary,
    'transparent',
  )};
  width: 14px;
  height: 14px;
  border-radius: 7px;
`
