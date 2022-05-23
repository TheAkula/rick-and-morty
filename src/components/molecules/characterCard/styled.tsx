import { View } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export const StyledCharacterCard = styled(View)`
  width: 163px;
  height: 219px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 17px;
  margin-bottom: 20px;
`

export const StyledCharacterCardInfo = styled(View)`
  line-height: 22px;
  padding: 12px;
  border: 1px solid ${colors.graybase.gray5};
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 79px;
`
