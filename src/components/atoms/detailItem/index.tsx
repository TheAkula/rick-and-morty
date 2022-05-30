import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { colors } from 'src/theme/colors'

import ArrowRightImage from '../../../../assets/images/icons/arrow-right.svg'
import { StyledText } from '../text'
import { EpisodeDate, StyledDetailItem } from './styled'

interface EpisodeItemProps {
  date?: string
  title: string
  navigate?: boolean
  description: string
  isEpisode?: boolean
}

export const DetailItem: React.FC<EpisodeItemProps> = ({
  description,
  title,
  date,
  navigate = false,
  isEpisode = false,
}) => {
  const Wrapper = (navigate ? TouchableOpacity : View) as React.ElementType

  return (
    <Wrapper>
      <StyledDetailItem isEpisode={isEpisode}>
        <View>
          <StyledText size={17} weight="black">
            {title[0].toUpperCase() + title.slice(1)}
          </StyledText>
          <StyledText size={15} color={colors.basic.lightGray}>
            {description || 'Unknown'}
          </StyledText>
          {date && <EpisodeDate>{date}</EpisodeDate>}
        </View>
        {navigate && <ArrowRightImage width={8} height={22} />}
      </StyledDetailItem>
    </Wrapper>
  )
}
