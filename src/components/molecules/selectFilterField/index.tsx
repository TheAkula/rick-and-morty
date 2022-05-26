import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import { Checkbox } from 'src/components/atoms/checkbox'
import { StyledText } from 'src/components/atoms/text'
import {
  Fields,
  FilterFieldType,
  getValue,
  ScreenTypes,
  useFilterContext,
} from 'src/modules/filter-context'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

import ArrowImage from '../../../../assets/images/icons/arrow-right.svg'
import {
  ArrowContainer,
  StyledFieldInfoItem,
  StyledSelectFilterField,
} from './styled'

interface SelectFilterFieldProps {
  name: FilterFieldType
  description: string
}

export const SelectFilterField: React.FC<SelectFilterFieldProps> = ({
  name,
  description,
}) => {
  const { fields, type } = useFilterContext()
  const navigation = useNavigation()

  const onPressed = () => {
    navigation.navigate('Select', {
      title: name,
    })
  }

  return (
    <TouchableWithoutFeedback onPress={onPressed}>
      <StyledSelectFilterField>
        <StyledFieldInfoItem>
          <Checkbox active={!!type && !!getValue(fields, type, name)} />
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
