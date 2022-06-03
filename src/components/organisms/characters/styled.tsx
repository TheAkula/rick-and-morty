import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const StyledCharactersList = styled.FlatList.attrs({
  alignItems: 'center',
})`
  width: 100%;
` as unknown as typeof FlatList
