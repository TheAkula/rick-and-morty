import { View } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export const FilterContainer = styled(View)`
  margin-left: auto;
  align-items: center;
  flex-direction: row;
  height: 44px;
  padding-right: 16px;
`

export const FilterActive = styled(View)`
  border-radius: 6px;
  width: 12px;
  height: 12px;
  background-color: ${colors.primary};
  margin-right: 5px;
`
