import React from 'react'

import { StyledCheckbox, StyledCheckboxInner } from './styled'

interface CheckboxProps {
  active: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ active }) => {
  return (
    <StyledCheckbox active={active}>
      <StyledCheckboxInner acitve={active} />
    </StyledCheckbox>
  )
}
