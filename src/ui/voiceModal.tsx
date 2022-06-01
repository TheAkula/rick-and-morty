import React from 'react'
import { Modal } from 'react-native'
import styled from 'styled-components/native'

import { StyledText } from 'src/components/atoms/text'
import { colors } from 'src/theme/colors'

const StyledVoiceModal = styled.View`
  border-radius: 8px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.7);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 40px;
`

const RecordIndicator = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${colors.basic.red};
  margin-right: 4px;
`

export const VoiceModal = () => {
  return (
    <StyledVoiceModal>
      <RecordIndicator />
      <StyledText size={12} color={colors.graybase.gray4}>
        Record
      </StyledText>
    </StyledVoiceModal>
  )
}
