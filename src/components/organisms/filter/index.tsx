import React from 'react'
import { View } from 'react-native'

import {
  FilterCharacter,
  FilterEpisode,
  FilterLocation,
} from 'src/generated/graphql'

interface FilterProps {
  fields: FilterLocation | FilterEpisode | FilterCharacter
}

export const Filter: React.FC<FilterProps> = ({ fields }) => {
  return <View></View>
}
