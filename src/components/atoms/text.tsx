import { Text } from 'react-native'
import styled from 'styled-components/native'

import { baseTheme } from '../../theme/base'

interface StyledTextProps {
  size: number
  color?: string
  weight?: 'regular' | 'bold' | 'black' | 'medium'
  align?: 'center' | 'left' | 'right'
}

export const StyledText = styled(Text)<StyledTextProps>`
  font-size: ${({ size }) => size + 'px'};
  color: ${({ color }) => (color ? color : baseTheme.colors.basic.black)};
  font-family: ${({ weight }) =>
    weight
      ? 'Roboto-' + weight[0].toUpperCase() + weight.slice(1)
      : 'Roboto-Regular'};
  text-align: ${({ align }) => (align ? align : 'left')};
`
