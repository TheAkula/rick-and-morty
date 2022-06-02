import React from 'react'
import { TouchableOpacity } from 'react-native'
import ArrowLeftImage from 'assets/images/icons/arrow-left.svg'

import { baseTheme } from 'src/theme/base'

import { StyledText } from '../text'
import { ImageWrapper, StyledBackButton } from './styled'

interface BackButtonProps {
  pressed: () => void
}

export const BackButton: React.FC<BackButtonProps> = ({ pressed }) => {
  return (
    <TouchableOpacity onPress={pressed}>
      <StyledBackButton>
        <ImageWrapper>
          <ArrowLeftImage width={12} height={20.5} />
        </ImageWrapper>
        <StyledText size={17} color={baseTheme.colors.primary}>
          Back
        </StyledText>
      </StyledBackButton>
    </TouchableOpacity>
  )
}
