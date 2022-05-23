import React from 'react'
import CheckBox from '@react-native-community/checkbox'

import { Fields, useFilterContext } from 'src/modules/filter-context'

interface CheckboxFilterFieldProps {
  title: string
  name: string
}

export const CheckboxFilterField: React.FC<CheckboxFilterFieldProps> = ({
  title,
  name,
}) => {
  const { updateField, fields } = useFilterContext()

  const onChangedHalder = (newValue: boolean) => {
    if (newValue) {
      updateField(title, name)
    } else {
      updateField(title, null)
    }
  }

  return (
    <CheckBox
      disabled={false}
      value={fields[title as keyof Fields] === name}
      onValueChange={onChangedHalder}
    />
  )
}
