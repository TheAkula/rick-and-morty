import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { Checkbox } from 'src/components/atoms/checkbox'
import { RowCenter } from 'src/components/atoms/row-center'
import { StyledText } from 'src/components/atoms/text'
import { Fields, useFilterContext } from 'src/modules/filter-context'

import { CheckboxTitle, StyledCheckboxContainer } from './styled'

interface CheckboxFilterFieldProps {
  title: string
  name: string
  isLast: boolean
}

export const CheckboxFilterField: React.FC<CheckboxFilterFieldProps> = ({
  title,
  name,
  isLast,
}) => {
  const { updateField, appliedFields } = useFilterContext()

  const onChangedHandler = () => {
    if (appliedFields[title as keyof Fields] !== name) {
      updateField(title, name)
    } else {
      updateField(title, null)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onChangedHandler}>
      <StyledCheckboxContainer>
        <RowCenter>
          <Checkbox active={appliedFields[title as keyof Fields] === name} />
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
