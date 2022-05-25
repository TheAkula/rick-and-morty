import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Routes, useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

import ArrowLeftImage from '../../../../assets/images/icons/arrow-left.svg'
import { StyledText } from '../text'
import { ImageWrapper, StyledFilterBack } from './styled'

export const FilterBack = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(Routes.FilterScreen, {
          screen: 'FilterHome',
        })
      }>
      <StyledFilterBack>
        <ImageWrapper>
          <ArrowLeftImage width={12} height={20.5} />
        </ImageWrapper>
        <StyledText size={17} color={colors.primary}>
          Back
        </StyledText>
      </StyledFilterBack>
    </TouchableOpacity>
  )
}
