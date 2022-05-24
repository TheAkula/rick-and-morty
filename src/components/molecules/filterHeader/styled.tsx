import { View } from 'react-native'
import styled from 'styled-components/native'

export const StyledFilterHeader = styled(View)`
  height: 44px;
  align-items: flex-end;
  padding-right: 15px;
  margin-top: 10px;
`

export const FilterHeaderTitle = styled(View)`
  width: 94px;
  margin-right: 15px;
`

export const FilterHeaderWrapper = styled(View).attrs({
  alignItems: 'center',
})`
  flex-direction: row;
  width: 50%;
`
