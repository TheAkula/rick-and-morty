import { View } from 'react-native'
import styled from 'styled-components/native'

export const StyledFilterHeader = styled(View)`
  height: 44px;
  padding-right: 15px;
  margin-top: 10px;
  padding-left: 15px;
`

export const FilterHeaderTitle = styled(View)`
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`

export const FilterHeaderWrapper = styled(View).attrs({
  alignItems: 'center',
})`
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderContainer = styled(View)<{ value: number }>`
  flex: ${({ value }) => value};
`
