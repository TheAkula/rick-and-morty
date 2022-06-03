import styled from 'styled-components/native'

import { baseTheme } from 'src/theme/base'

export const StyledCharacterCard = styled.View`
  width: 163px;
  height: 219px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  margin-right: ${baseTheme.sizes.characters.gap / 2}px;
  margin-left: ${baseTheme.sizes.characters.gap / 2}px;
  position: relative;
`

export const StyledCharacterCardInfo = styled.View`
  margin: 12px;
  overflow: hidden;
  flex: 1;
`

export const StyledCharacterInfoWrapper = styled.View`
  border-top-width: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  flex: 1;
  overflow: hidden;
  border: 1px solid ${baseTheme.colors.graybase.gray5};
`

export const CharacterCardContainer = styled.View`
  width: 50%;
`
