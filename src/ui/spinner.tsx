import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'

const SpinnerContainer = styled.View`
  align-items: center;
  margin-top: 40px;
`

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <ActivityIndicator color={baseTheme.colors.primary} size="large" />
    </SpinnerContainer>
  )
}
