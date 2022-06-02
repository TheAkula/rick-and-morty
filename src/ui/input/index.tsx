import React from 'react'
import {
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
} from 'react-native'
import Voice, { SpeechResultsEvent } from '@react-native-voice/voice'
import DictationIcon from 'assets/images/icons/dictation.svg'
import DictationActiveIcon from 'assets/images/icons/dictation-active.svg'
import SearchIcon from 'assets/images/icons/search.svg'

import {
  Fields,
  FilterFieldType,
  getValue,
  ScreenTypes,
} from 'src/modules/filter-context'

import {
  DictationButton,
  InputContainer,
  SearchIconContainer,
  StyledInputWrapper,
  StyledTextInput,
} from './styled'

type InputProps = {
  setIsRecording: (s: boolean) => void
  title: FilterFieldType
  isRecording: boolean
  fields: Fields
  updateField: (k: string, v: unknown) => void
  type: ScreenTypes | null
} & TextInputProps

export class Input extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props)
    Voice.onSpeechStart = this.onSpeechStart.bind(this)
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this)
    Voice.onSpeechResults = this.onSpeechResults.bind(this)
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this)
  }

  componentWillUnmount() {
    Voice.destroy().then(() => Voice.removeAllListeners())
  }

  inputRef = React.createRef<TextInput>()

  onSpeechStart() {
    this.props.updateField(this.props.title, '')
    this.props.setIsRecording(true)
  }

  onSpeechEnd() {
    this.props.setIsRecording(false)
  }

  onSpeechResults(e: SpeechResultsEvent) {
    this.props.updateField(this.props.title, e.value ? e.value[0] : '')
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
            value={
              this.props.type
                ? getValue(this.props.fields, this.props.type, this.props.title)
                : ''
            }
            onChangeText={(text) =>
              this.props.updateField(this.props.title, text)
            }
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
    )
  }
}
