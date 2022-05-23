import { FlatList, View } from 'react-native'
import styled from 'styled-components/native'

export const StyledCharactersList = styled(FlatList).attrs({
  alignItems: 'center',
})`
  padding-top: 9px;
  margin-bottom: 40px;
  flex: 1;
`

export const CharactersContainer = styled(View)`
  flex: 1;
`
