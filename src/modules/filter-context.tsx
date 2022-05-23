import React, { useContext, useState } from 'react'

import {
  FilterCharacter,
  FilterEpisode,
  FilterLocation,
} from 'src/generated/graphql'

type Fields = FilterLocation | FilterEpisode | FilterCharacter

interface InitialState {
  type: string | null
  fields: Fields
  updateFields: (f: Fields) => void
  updateType: (t: string) => void
}

const initialState: InitialState = {
  type: null,
  fields: {},
  updateFields: () => undefined,
  updateType: () => undefined,
}

const FilterContext = React.createContext(initialState)

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [fields, setFields] = useState<Fields>({})
  const [type, setType] = useState<string | null>(null)

  const updateFields = (f: Fields) => {
    setFields(f)
  }

  const updateType = (t: string) => {
    setType(t)
  }

  return (
    <FilterContext.Provider value={{ fields, updateFields, type, updateType }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)
