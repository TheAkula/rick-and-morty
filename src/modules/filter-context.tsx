import React, { Reducer, useContext, useReducer, useState } from 'react'

import {
  FilterCharacter,
  FilterEpisode,
  FilterLocation,
} from 'src/generated/graphql'

type Fields = FilterLocation | FilterEpisode | FilterCharacter

interface InitialState {
  type: string | null
  fields: Fields
  updateFields: (k: keyof Fields, v: unknown) => void
  updateType: (t: string) => void
  clearFields: () => void
}

interface FilterAction {
  type: 'SET_FIELD' | 'CLEAR'
  payload?: {
    key: keyof Fields
    value: unknown
  }
}

const initialState: InitialState = {
  type: null,
  fields: {},
  updateFields: () => undefined,
  updateType: () => undefined,
  clearFields: () => undefined,
}

const FilterContext = React.createContext(initialState)

const reducer: Reducer<Fields, FilterAction> = (state, action) => {
  switch (action.type) {
    case 'CLEAR':
      return {}

    case 'SET_FIELD':
      return {
        ...state,
        [action.payload?.key as string]: action.payload?.value,
      }
  }
}

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [fields, dispatch] = useReducer(reducer, {})
  const [type, setType] = useState<string | null>(null)

  const updateFields = (key: keyof Fields, value: unknown) => {
    dispatch({ type: 'SET_FIELD', payload: { key, value } })
  }

  const updateType = (t: string) => {
    setType(t)
  }

  const clearFields = () => {
    dispatch({ type: 'CLEAR' })
  }

  return (
    <FilterContext.Provider
      value={{ fields, updateFields, type, updateType, clearFields }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)
