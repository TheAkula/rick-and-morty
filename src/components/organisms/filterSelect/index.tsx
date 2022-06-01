import React, { useState } from 'react'
import { View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { FilterParamList, FilterRoutes } from 'src/types/filterNavigation'
import { Input } from 'src/ui/input'
import { VoiceModal } from 'src/ui/voiceModal'

import { StyledFilterSelect } from './styled'

type Props = NativeStackScreenProps<FilterParamList, FilterRoutes.Select>

export const FilterSelect = ({ route }: Props) => {
  const [isRecording, setIsRecording] = useState(false)
  const { title } = route.params

  return (
    <StyledFilterSelect>
      <Input
        isRecording={isRecording}
        setIsRecording={(s: boolean) => setIsRecording(s)}
        title={title}
      />
      {isRecording && <VoiceModal />}
    </StyledFilterSelect>
  )
}
