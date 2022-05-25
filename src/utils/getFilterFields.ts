export interface FilterFieldSelect {
  type: 'select'
  title: string
  description: string
}

export interface FilterFieldCheck {
  type: 'check'
  title: string
  data: string[]
}

const CHARACTER_FIELDS: (FilterFieldCheck | FilterFieldSelect)[] = [
  { title: 'name', description: 'Give a name', type: 'select' },
  { title: 'species', description: 'Enter species', type: 'select' },
  {
    title: 'gender',
    data: ['female', 'male', 'genderless', 'unknown'],
    type: 'check',
  },
  { title: 'status', data: ['alive', 'dead', 'unknown'], type: 'check' },
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

export enum ScreenTypes {
  location = 'location',
  episode = 'episode',
  character = 'character',
}

// export function getFilterFields(
//   type: ScreenTypes.episode | ScreenTypes.location,
// ): FilterFieldSelect[]

// export function getFilterFields(
//   type: ScreenTypes.character,
// ): (FilterFieldCheck | FilterFieldSelect)[]

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
