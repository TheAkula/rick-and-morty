const CHARACTER_FIELDS = [
  'species',
  'name',
  { title: 'gender', data: ['female', 'male', 'genderless', 'unknown'] },
  { title: 'status', data: ['alive', 'dead', 'unknown'] },
]
const LOCATION_FIELDS = ['name', 'type', 'dimension']
const EPISODE_FIELDS = ['name', 'episode']

export const getFilterFields = (type: string | null) => {
  if (!type) {
    return null
  }

  switch (type) {
    case 'location':
      return LOCATION_FIELDS

    case 'character':
      return CHARACTER_FIELDS

    case 'episode':
      return EPISODE_FIELDS

    default:
      throw new Error('Uncaught type: ' + type)
  }
}
