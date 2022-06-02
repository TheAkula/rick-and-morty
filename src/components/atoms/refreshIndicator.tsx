import React from 'react'
import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'
import { Spinner } from 'src/ui/spinner'

export const StyledRefreshIndicatorContainer = styled.View`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(${-baseTheme.sizes.spinner.width / 2}px);
`

export const RefreshIndicator = () => {
  return (
    <StyledRefreshIndicatorContainer>
      <Spinner />
    </StyledRefreshIndicatorContainer>
  )
}
