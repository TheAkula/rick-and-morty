import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'

export const RefreshIndicatorContainer = styled.View`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(${-baseTheme.sizes.spinner.width / 2}px);
`
