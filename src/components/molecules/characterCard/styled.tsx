import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'

export const StyledCharacterCard = styled.View`
  width: 163px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`

export const StyledCharacterCardInfo = styled.View`
  line-height: 22px;
  padding: 12px;
  border: 1px solid ${baseTheme.colors.graybase.gray5};
  border-top-width: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const CharacterCardContainer = styled.View`
  width: 50%;
`
