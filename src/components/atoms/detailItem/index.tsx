import React, { useCallback, useMemo } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Routes, useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

import ArrowRightImage from '../../../../assets/images/icons/arrow-right.svg'
import { StyledText } from '../text'
import { EpisodeDate, StyledDetailItem } from './styled'

interface EpisodeItemProps {
  date?: string
  title: string
  navigate?: string
  description: string
  isEpisode?: boolean
}

export const DetailItem: React.FC<EpisodeItemProps> = ({
  description,
  title,
  date,
  navigate,
  isEpisode = false,
}) => {
  const navigation = useNavigation()

  const onPressed = useCallback(() => {
    navigation.navigate(
      isEpisode ? Routes.EpisodeDetailScreen : Routes.LocationDetailScreen,
      {
        id: navigate,
        name: description,
      },
    )
  }, [description, navigate, navigation, isEpisode])

  const Wrapper = useMemo(
    () => (navigate ? TouchableOpacity : View) as React.ElementType,
    [navigate],
  )

  return (
    <Wrapper onPress={navigate ? onPressed : undefined}>
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
        {navigate ? <ArrowRightImage width={8} height={22} /> : null}
      </StyledDetailItem>
    </Wrapper>
  )
}
