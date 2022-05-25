import { SectionList } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

export const FilterSectionList = styled(SectionList)`
  border-color: ${colors.basic.line};
  border-bottom-width: 1px;
  border-style: solid;
  margin-bottom: 30px;
`
