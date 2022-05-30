import React, { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { StyledText } from 'src/components/atoms/text'
import { colors } from 'src/theme/colors'

const ButtonBlock = styled.TouchableOpacity<{ isDisabled?: boolean }>`
  opacity: ${ifProp('isDisabled', '0.55', '1')};
  padding: 5px 12px;
  border-radius: 24px;
  background-color: ${colors.primary};
`
const Title = styled(StyledText)`
  text-align: center;
  color: ${colors.basic.white};
`

interface Props extends TouchableOpacityProps {
  title?: string
  children?: ReactNode
  onPress?: () => void
}

export const Button = ({ children, onPress, title, ...rest }: Props) => {
  return (
    <ButtonBlock
      isDisabled={Boolean(rest.disabled)}
      onPress={onPress}
      {...rest}>
      <Title size={13} weight="black">
        {title}
      </Title>
      {children}
    </ButtonBlock>
  )
}
