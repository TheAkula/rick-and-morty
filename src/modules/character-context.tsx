import React, { useContext, useState } from 'react'

import { Episode } from 'src/generated/graphql'

export type DetailType =
  | Omit<Episode, 'characters'>
  | null
  | (string | null | undefined)[]

interface CharacterDetail {
  title: string
  data: DetailType[]
}

interface InitialState {
  details: CharacterDetail[]
  updateDetails: (newItems: CharacterDetail[]) => void
}

const initialState: InitialState = {
  details: [],
  updateDetails: () => undefined,
}

const CharacterContext = React.createContext(initialState)

export const CharacterContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, setState] = useState<CharacterDetail[]>([])

  const updateDetails = (newDetails: CharacterDetail[]) => {
    setState(() => newDetails)
  }

  return (
    <CharacterContext.Provider value={{ details: state, updateDetails }}>
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacterContext = () => useContext(CharacterContext)
