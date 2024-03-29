import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ArrowImage from 'assets/images/icons/arrow-right.svg'

import { Checkbox } from 'src/components/atoms/checkbox'
import { DetailItem } from 'src/components/atoms/detailItem'
import {
  FilterFieldType,
  getValue,
  useFilterContext,
} from 'src/modules/filter-context'
import { FilterRoutes, FilterScreenProps } from 'src/navigation/routes'

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
  const navigation =
    useNavigation<FilterScreenProps<FilterRoutes.Home>['navigation']>()

  const onPressed = () => {
    navigation.push(FilterRoutes.Select, {
      title: name,
    })
  }

  return (
    <TouchableWithoutFeedback onPress={onPressed}>
      <StyledSelectFilterField>
        <StyledFieldInfoItem>
          <Checkbox active={!!type && !!getValue(fields, type, name)} />
          <DetailItem title={name} description={description} />
        </StyledFieldInfoItem>
        <ArrowContainer>
          <ArrowImage width={8} height={22} />
        </ArrowContainer>
      </StyledSelectFilterField>
    </TouchableWithoutFeedback>
  )
}
