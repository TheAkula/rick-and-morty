import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { Checkbox } from 'src/components/atoms/checkbox'
import { RowCenter } from 'src/components/atoms/row-center'
import { StyledText } from 'src/components/atoms/text'
import {
  FilterFieldType,
  getValue,
  useFilterContext,
} from 'src/modules/filter-context'

import { CheckboxTitle, StyledCheckboxContainer } from './styled'

interface CheckboxFilterFieldProps {
  title: FilterFieldType
  name: string
  isLast: boolean
}

export const CheckboxFilterField: React.FC<CheckboxFilterFieldProps> = ({
  title,
  name,
  isLast,
}) => {
  const { updateField, fields, type } = useFilterContext()

  const onChangedHandler = () => {
    if (type && getValue(fields, type, title) !== name) {
      updateField(title, name)
    } else {
      updateField(title, null)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onChangedHandler}>
      <StyledCheckboxContainer>
        <RowCenter>
          <Checkbox active={!!type && getValue(fields, type, title) === name} />
        </RowCenter>
        <CheckboxTitle isLast={isLast}>
          <StyledText size={17}>
            {name[0].toUpperCase() + name.slice(1)}
          </StyledText>
        </CheckboxTitle>
      </StyledCheckboxContainer>
    </TouchableWithoutFeedback>
  )
}
