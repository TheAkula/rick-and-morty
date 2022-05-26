import React, { Reducer, useContext, useReducer } from 'react'

import {
  FilterCharacter,
  FilterEpisode,
  FilterLocation,
} from 'src/generated/graphql'

export enum ScreenTypes {
  character = 'character',
  episode = 'episode',
  location = 'location',
}

export type FilterFieldType = keyof (FilterCharacter &
  FilterEpisode &
  FilterLocation)

export type Fields = {
  [ScreenTypes.character]: FilterCharacter
  [ScreenTypes.episode]: FilterEpisode
  [ScreenTypes.location]: FilterLocation
}

export type FilterCharacterKey = keyof FilterCharacter
export type FilterEpisodeKey = keyof FilterEpisode
export type FilterLocationKey = keyof FilterLocation

export function getValue<
  M extends Fields,
  T extends ScreenTypes,
  K extends FilterFieldType,
>(obj: M, type: T, key: K): any {
  return obj[type][key as keyof M[T]]
}

interface InitialState {
  type: ScreenTypes | null
  fields: Fields
  appliedFields: Fields
  updateField: (k: string, v: unknown) => void
  updateType: (t: ScreenTypes) => void
  clearFields: () => void
  apply: () => void
}

interface FilterAction {
  type: 'SET_FIELD' | 'CLEAR' | 'APPLY' | 'SET_TYPE'
  payload?: {
    value?: unknown
    key?: string
  }
}

interface ReducerState {
  applied: Fields
  changes: Fields
  type: ScreenTypes | null
}

const initialState: InitialState = {
  type: null,
  fields: {
    character: {},
    location: {},
    episode: {},
  },
  appliedFields: {
    character: {},
    location: {},
    episode: {},
  },
  updateField: () => undefined,
  updateType: () => undefined,
  clearFields: () => undefined,
  apply: () => undefined,
}

const FilterContext = React.createContext(initialState)

const reducer: Reducer<ReducerState, FilterAction> = (state, action) => {
  switch (action.type) {
    case 'CLEAR':
      return {
        ...state,
        changes: {
          [ScreenTypes.character]: {},
          [ScreenTypes.location]: {},
          [ScreenTypes.episode]: {},
        },
        applied: {
          [ScreenTypes.character]: {},
          [ScreenTypes.location]: {},
          [ScreenTypes.episode]: {},
        },
      }

    case 'SET_FIELD':
      if (!state.type || !action.payload) {
        return state
      }

      if (!action.payload.key || action.payload.value === undefined) {
        return state
      }

      return {
        ...state,
        changes: {
          ...state.changes,
          [state.type]: {
            ...state.changes[state.type],
            [action.payload?.key]: action.payload?.value,
          },
        },
      }

    case 'APPLY':
      return {
        ...state,
        applied: { ...state.changes },
      }

    case 'SET_TYPE':
      return {
        ...state,
        type: action.payload?.value as ScreenTypes,
      }
  }
}

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, {
    applied: {
      [ScreenTypes.character]: {},
      [ScreenTypes.location]: {},
      [ScreenTypes.episode]: {},
    },
    changes: {
      [ScreenTypes.character]: {},
      [ScreenTypes.location]: {},
      [ScreenTypes.episode]: {},
    },
    type: null,
  })

  const updateField = (key: string, value: unknown) => {
    dispatch({ type: 'SET_FIELD', payload: { key, value } })
  }

  const updateType = (t: ScreenTypes) => {
    dispatch({ type: 'SET_TYPE', payload: { value: t } })
  }

  const clearFields = () => {
    dispatch({ type: 'CLEAR' })
  }

  const apply = () => {
    dispatch({ type: 'APPLY' })
  }

  return (
    <FilterContext.Provider
      value={{
        fields: state.changes,
        appliedFields: state.applied,
        type: state.type,
        updateField,
        updateType,
        clearFields,
        apply,
      }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)
