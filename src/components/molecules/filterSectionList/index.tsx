import { SectionList } from 'react-native'
import styled from 'styled-components'

import { colors } from 'src/theme/colors'

export const FilterSectionList = styled(SectionList)`
  border-color: ${colors.graybase.gray2};
  border-bottom-width: 1px;
  border-style: solid;
  margin-bottom: 30px;
`
