import React, { Reducer, useContext, useReducer, useState } from 'react'

import {
  FilterCharacter,
  FilterEpisode,
  FilterLocation,
} from 'src/generated/graphql'

export type Fields = FilterLocation | FilterEpisode | FilterCharacter

interface InitialState {
  type: string | null
  fields: Fields
  appliedFields: Fields
  updateField: (k: string, v: unknown) => void
  updateType: (t: string) => void
  clearFields: () => void
  apply: () => void
}

interface FilterAction {
  type: 'SET_FIELD' | 'CLEAR' | 'APPLY'
  payload?: {
    key: string
    value: unknown
  }
}

interface ReducerState {
  applied: Fields
  changes: Fields
}

const initialState: InitialState = {
  type: null,
  fields: {},
  appliedFields: {},
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
        applied: {},
        changes: {},
      }

    case 'SET_FIELD':
      return {
        ...state,
        changes: {
          ...state.changes,
          [action.payload?.key as string]: action.payload?.value,
        },
      }

    case 'APPLY':
      return {
        ...state,
        applied: { ...state.changes },
      }
  }
}

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, { applied: {}, changes: {} })
  const [type, setType] = useState<string | null>(null)

  const updateField = (key: string, value: unknown) => {
    dispatch({ type: 'SET_FIELD', payload: { key, value } })
  }

  const updateType = (t: string) => {
    setType(t)
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
        updateField,
        type,
        updateType,
        clearFields,
        apply,
      }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)
