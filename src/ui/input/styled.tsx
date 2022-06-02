import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'

export const StyledTextInput = styled.TextInput`
  font-size: 17px;
  padding: 0;
  flex: 1;
`

export const StyledInputWrapper = styled.View`
  border-radius: 10px;
  background-color: ${baseTheme.colors.basic.inputBg};
  height: 36px;
  flex-direction: row;
  align-items: center;
`

export const InputContainer = styled.View`
  padding: 6px 16px 10px 16px;
  border-color: ${baseTheme.colors.basic.line};
  border-bottom-width: 1px;
  border-style: solid;
`

export const SearchIconContainer = styled.View`
  padding-left: 10px;
  padding-right: 7px;
`

export const DictationButton = styled.View`
  margin-right: 8px;
`
