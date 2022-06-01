import React, { useRef } from 'react'
import {
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
} from 'react-native'
import Voice, {
  SpeechEndEvent,
  SpeechResultsEvent,
  SpeechStartEvent,
} from '@react-native-voice/voice'
import DictationIcon from 'assets/images/icons/dictation.svg'
import DictationActiveIcon from 'assets/images/icons/dictation-active.svg'
import SearchIcon from 'assets/images/icons/search.svg'
import styled from 'styled-components/native'

import {
  FilterContext,
  FilterFieldType,
  getValue,
} from 'src/modules/filter-context'
import { colors } from 'src/theme/colors'

const StyledTextInput = styled.TextInput`
  font-size: 17px;
  padding: 0;
  flex: 1;
`

const StyledInputWrapper = styled.View`
  border-radius: 10px;
  background-color: ${colors.basic.inputBg};
  height: 36px;
  flex-direction: row;
  align-items: center;
`

const InputContainer = styled.View`
  padding: 6px 16px 10px 16px;
  border-color: ${colors.basic.line};
  border-bottom-width: 1px;
  border-style: solid;
`

const SearchIconContainer = styled.View`
  padding-left: 10px;
  padding-right: 7px;
`

const DictationButton = styled.View`
  margin-right: 8px;
`

type InputProps = {
  setIsRecording: (s: boolean) => void
  title: FilterFieldType
  isRecording: boolean
} & TextInputProps

export class Input extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props)
    Voice.onSpeechStart = this.onSpeechStart.bind(this)
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this)
    Voice.onSpeechResults = this.onSpeechResults.bind(this)
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this)
  }

  state = {
    results: [],
    partialResults: [],
  }

  componentWillUnmount() {
    Voice.destroy().then(() => Voice.removeAllListeners())
  }

  inputRef = React.createRef<TextInput>()

  onSpeechStart() {
    console.log('speech started')
    this.setState({ results: '' })
    this.props.setIsRecording(true)
  }

  onSpeechEnd() {
    this.props.setIsRecording(false)
    console.log('speech ended')
  }

  onSpeechResults(e: SpeechResultsEvent) {
    console.log('speech results')
    this.setState({ value: e.value })
  }

  onSpeechPartialResults(e: SpeechResultsEvent) {
    this.setState({ partialResults: e.value })
  }

  onPressed() {
    if (this.inputRef.current && !this.inputRef.current.isFocused()) {
      this.inputRef.current.focus()
    } else if (this.inputRef.current) {
      this.inputRef.current.blur()
    }
  }

  _toggleRecognizing() {
    this.setState({ partialResults: [], results: [] })
    Voice.isRecognizing().then((isR) => {
      if (isR) {
        Voice.stop().then(() => {
          this.props.setIsRecording(false)
        })
      } else {
        Voice.start('en-US')
      }
    })
  }

  render() {
    return (
      <FilterContext.Consumer>
        {({ fields, updateField, type }) => (
          <InputContainer>
            <StyledInputWrapper>
              <TouchableWithoutFeedback onPress={this.onPressed.bind(this)}>
                <SearchIconContainer>
                  <SearchIcon width={14} height={14} />
                </SearchIconContainer>
              </TouchableWithoutFeedback>
              <StyledTextInput
                placeholder="Search"
                {...this.props}
                value={type ? getValue(fields, type, this.props.title) : ''}
                onChangeText={(text) => updateField(this.props.title, text)}
                ref={this.inputRef}
              />
              <TouchableWithoutFeedback
                onPress={this._toggleRecognizing.bind(this)}>
                <DictationButton>
                  {this.props.isRecording ? (
                    <DictationActiveIcon width={20} height={20} />
                  ) : (
                    <DictationIcon width={20} height={20} />
                  )}
                </DictationButton>
              </TouchableWithoutFeedback>
            </StyledInputWrapper>
          </InputContainer>
        )}
      </FilterContext.Consumer>
    )
  }
}
