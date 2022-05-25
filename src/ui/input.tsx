import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const StyledTextInput = styled.TextInput`
  height: 36px;
  background-color: ${colors.basic.inputBg};
  border-radius: 10px;
  font-size: 17px;
  padding: 0;
  padding-left: 30px;
`

const InputContainer = styled.View`
  padding: 6px 16px 10px 16px;
  border-color: ${colors.basic.line};
  border-bottom-width: 1px;
  border-style: solid;
`

export const Input = () => {
  return (
    <InputContainer>
      <StyledTextInput placeholder="Search" />
    </InputContainer>
  )
}
