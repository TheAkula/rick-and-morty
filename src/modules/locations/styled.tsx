import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const StyledFlatList = styled.FlatList.attrs({
  alignItems: 'center',
})`
  padding-top: 19px;
` as unknown as typeof FlatList
