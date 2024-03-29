import { FilterFieldType, ScreenTypes } from 'src/modules/filter-context'

export interface FilterFieldSelect {
  type: 'select'
  title: FilterFieldType
  description: string
}

export interface FilterFieldCheck {
  type: 'check'
  title: FilterFieldType
  data: string[]
}

const CHARACTER_FIELDS: (FilterFieldCheck | FilterFieldSelect)[] = [
  { title: 'name', description: 'Give a name', type: 'select' },
  { title: 'species', description: 'Enter species', type: 'select' },
  { title: 'status', data: ['alive', 'dead', 'unknown'], type: 'check' },
  {
    title: 'gender',
    data: ['female', 'male', 'genderless', 'unknown'],
    type: 'check',
  },
]
const LOCATION_FIELDS: FilterFieldSelect[] = [
  { title: 'name', type: 'select', description: 'Give a name' },
  { title: 'type', type: 'select', description: 'Select one' },
  { title: 'dimension', type: 'select', description: 'Select one' },
]
const EPISODE_FIELDS: FilterFieldSelect[] = [
  { title: 'name', type: 'select', description: 'Give a name' },
  { title: 'episode', type: 'select', description: 'Select one' },
]

export function getFilterFields(
  type: string | null,
): (FilterFieldCheck | FilterFieldSelect)[] | null {
  if (!type) {
    return null
  }

  switch (type) {
    case ScreenTypes.location:
      return LOCATION_FIELDS

    case ScreenTypes.character:
      return CHARACTER_FIELDS

    case ScreenTypes.episode:
      return EPISODE_FIELDS

    default:
      throw new Error('Uncaught type: ' + type)
  }
}
