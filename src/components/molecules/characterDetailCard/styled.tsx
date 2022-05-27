import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

export const StyledCharacterDetailCard = styled.ImageBackground.attrs({
  blurRadius: 2,
  imageStyle: {
    width: '100%',
    height: 84,
  },
})`
  padding-top: 15px;
  align-items: center;
  background-color: ${colors.graybase.gray6};
  padding-bottom: 20px;
`

export const ImageContainer = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 103px;
  border: 5px solid ${colors.graybase.gray6};
  overflow: hidden;
  margin-bottom: 20px;
  align-items: center;
`

export const StyledCardContainer = styled.View`
  margin-top: 3px;
`

export const StyledImage = styled.Image`
  width: 130px;
  height: 130px;
`
