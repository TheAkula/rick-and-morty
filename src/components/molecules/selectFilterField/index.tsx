import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import { Checkbox } from 'src/components/atoms/checkbox'
import { DetailsItem } from 'src/components/atoms/detailsItem'
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
          <DetailsItem name={name} description={description} isLast={true} />
        </StyledFieldInfoItem>
        <ArrowContainer>
          <ArrowImage width={8} height={22} />
        </ArrowContainer>
      </StyledSelectFilterField>
    </TouchableWithoutFeedback>
  )
}
