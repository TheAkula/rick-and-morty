import { View } from 'react-native'
import styled from 'styled-components/native'

export const StyledFilterHeader = styled(View).attrs(() => ({
  justifyContent: 'flex-end',
  alignItems: 'center',
}))`
  height: 44px;
  flex-direction: row;
  padding-right: 15px;
  margin-top: 10px;
`

export const FilterHeaderTitlte = styled(View).attrs({
  justifyContent: 'center',
})`
  width: 50%;
`
