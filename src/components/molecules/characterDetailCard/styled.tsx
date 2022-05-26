import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export const StyledCharacterDetailCard = styled.View`
  padding-top: 15px;
  align-items: center;
  background-color: ${colors.graybase.gray6};
`

export const ImageContainer = styled.View`
  width: 130px;
  height: 130px;
  border-radius: 103px;
  border: 5px solid ${colors.graybase.gray6};
  overflow: hidden;
  margin-bottom: 20px;
`

export const StyledCardContainer = styled.View`
  margin-top: 3px;
`
