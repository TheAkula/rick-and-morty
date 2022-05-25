import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import { Checkbox } from 'src/components/atoms/checkbox'
import { StyledText } from 'src/components/atoms/text'
import { Fields, useFilterContext } from 'src/modules/filter-context'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

import ArrowImage from '../../../../assets/images/icons/arrow-right.svg'
import {
  ArrowContainer,
  StyledFieldInfoItem,
  StyledSelectFilterField,
} from './styled'

interface SelectFilterFieldProps {
  name: string
  description: string
}

export const SelectFilterField: React.FC<SelectFilterFieldProps> = ({
  name,
  description,
}) => {
  const { fields } = useFilterContext()
  const navigation = useNavigation()

  const onPressed = () => {
  }

  return (
    <TouchableWithoutFeedback onPress={onPressed}>
      <StyledSelectFilterField>
        <StyledFieldInfoItem>
          <Checkbox active={!!fields[name as keyof Fields]} />
          <View>
            <StyledText size={17} weight="black">
              {name[0].toUpperCase() + name.slice(1)}
            </StyledText>
            <StyledText size={15} color={colors.basic.lightGray}>
              {description}
            </StyledText>
          </View>
        </StyledFieldInfoItem>
        <ArrowContainer>
          <ArrowImage width={8} height={22} />
        </ArrowContainer>
      </StyledSelectFilterField>
    </TouchableWithoutFeedback>
  )
}
