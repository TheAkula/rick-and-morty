import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const StyledCharactersList = styled.FlatList.attrs({
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
})`
  width: 100%;
` as unknown as typeof FlatList
