import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const SpinnerContainer = styled.View`
  align-items: center;
  margin-top: 40px;
`

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <ActivityIndicator color={colors.primary} size="large" />
    </SpinnerContainer>
  )
}
