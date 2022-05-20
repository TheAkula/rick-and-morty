import { Text, View } from 'react-native'
import styled from 'styled-components/native'

import { colors } from './colors'

interface StyledTextProps {
  size: number
  color?: string
  weight?: 'regular' | 'bold' | 'black'
}

export const StyledText = styled(Text)<StyledTextProps>`
  font-size: ${({ size }) => size + 'px'};
  color: ${({ color }) => (color ? color : colors.basic.black)};
  font-family: ${({ weight }) =>
    weight
      ? 'Roboto-' + weight[0].toUpperCase() + weight.slice(1)
      : 'Roboto-Regular'};
`
