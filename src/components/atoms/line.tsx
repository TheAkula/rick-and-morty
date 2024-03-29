import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { baseTheme } from 'src/theme/base'

export const Line = styled.View<{ ml?: number; mr?: number }>`
  height: 1px;
  background-color: ${baseTheme.colors.basic.line};
  margin-left: ${({ ml }) => ifProp('ml', ml + 'px', '0')};
  margin-right: ${({ mr }) => ifProp('mr', mr + 'px', '0')};
`
